var hello = /** @class */ 
    (function () 
        {
            function hello() 
            {}
            hello.prototype.call = function () 
            {
                console.log(" Calling of object with the help of Object.. ");
            };
            return hello;
        }()
    );
var obj = new hello();
obj.call();
