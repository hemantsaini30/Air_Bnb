const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema,reviewSchema} = require("./schema.js");

module.exports.isLoggedIn = (req,res,next)=>{
     if(!req.isAuthenticated()){
        req.session.redirectUrl = req.originalUrl;
        req.flash("error","you must be logged in to create listing");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req,res,next)=>{
    if(req.session.redirectUrl){
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};

module.exports.isOwner = async(req,res,next)=>{
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};


module.exports.validateListing = (req,res,next)=>{
    if (!req.body || !req.body.listing) {
        throw new ExpressError("Missing 'listing' object in request body", 400);
    }
    let {error} = listingSchema.validate(req.body.listing);
    
    if(error){
        console.log(error);
        let errMsg = error.details.map(el=> el.message).join(", ");
        throw new ExpressError(errMsg,400);
    }else{
        next();
    }
};

module.exports.validateReview = (req,res,next)=>{
    if (!req.body || !req.body.review) {
        throw new ExpressError("Missing 'review' object in request body", 400);
    }
    let {error} = reviewSchema.validate(req.body);
    if(error){
        let errMsg = error.details.map(el=> el.message).join(",");
        throw new ExpressError(errMsg,404);
    }else{
        next();
    }
};

module.exports.isReviewAuthor = async(req,res,next)=>{
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};