var app = angular.module("cartoonApp");

app.service("cartoonService", function(){
    this.cartoonPost = [];
    var self = this;
    this.addObject = function(input) {
        self.cartoonPost.push(input);
        return self.cartoonPost;
    };
});