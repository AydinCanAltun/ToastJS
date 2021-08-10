class Toast
{
    constructor(options)
    {
        var opt = null;
        if(options == null || options == undefined)
        {
            this.position = "top-left";
            this.duration = 1000;
        }else
        {
            opt = options;
            if(typeof(opt.position) !== "string")
            {
                opt.position = "top-left";
            }
            
            if(typeof(opt.duration) !== "number")
            {
                opt.duration = 1000;
            }

            if(opt.duration <= 0)
            {
                opt.duration = 1000;
            }
            
            if(opt.position !== "top-left" || opt.position !== "top-right" || opt.position !== "bottom-left" || opt.position !== "bottom-right")
            {
                opt.position = "top-left";
            }


        }

        this.position = opt.position;
        this.duration = opt.duration;
        this.createContainer();
    }

    createContainer()
    {
        var container = document.createElement("div");
        container.id = "toast-container";

        if(this.position === "top-right")
        {
            container.classList = "top-right";
        }else if(this.position === "top-left")
        {
            container.classList = "top-left";
        }else if(this.position === "bottom-right")
        {
            container.classList = "bottom-right";
        }else if(this.position === "bottom-left")
        {
            container.classList = "bottom-left";
        }else
        {
            container.classList = "top-left";
        }
        document.body.appendChild(container);
    }

    draw(title, message, type)
    {
        var container = document.getElementById("toast-container");
        
        if(container == null)
        {
            return false;
        }
        
        var toast = document.createElement("div");

        if(type === "success")
        {
            toast.classList = "toast success";
        }else if(type === "info")
        {
            toast.classList = "toast info";
        }else if(type === "warning")
        {
            toast.classList = "toast warning";
        }else if(type === "error")
        {
            toast.classList = "toast error";
        }

        var closeButton = document.createElement("button");
        closeButton.classList = "close";
        closeButton.setAttribute("role", "button");
        closeButton.innerHTML = "X";

        closeButton.addEventListener('click', function(e){
            e.preventDefault();
            toast.remove();
        });

        toast.appendChild(closeButton);

        if(title !== null || title !== " ")
        {
            var titleDIV = document.createElement("div");
            titleDIV.classList = "title";
            titleDIV.innerHTML = title;
            toast.appendChild(titleDIV);
        }

        if(message !== null || title !== " ")
        {
            var messageDIV = document.createElement("div");
            messageDIV.classList = "message";
            messageDIV.innerHTML = message;
            toast.appendChild(messageDIV);
        }

        container.appendChild(toast);
        
        setTimeout(function(){
            toast.remove();
        }, this.duration);
    }

    success(title, message)
    {
        this.draw(title, message , "success");
    }

    info(title, message)
    {
        this.draw(title, message, "info");
    }

    warning(title, message)
    {
        this.draw(title, message, "warning");
    }

    error(title, message)
    {
        this.draw(title, message, "error");
    }



}