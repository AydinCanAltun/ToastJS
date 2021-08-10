# ToastJS

## Usage

Add toast.css and toast.js to your html and then

    
    var toast =  new  Toast({
	    position:  "top-left",
	    duration:  1500
    });
        
    toast.success("Title", "Message");
    toast.info("Title", "Message");
    toast.warning("Title", "Message");
    toast.error("Title", "Message");
    
  

Position: top-left(default) | top-right | bottom-left | bottom-right 
Duration must be a number(1000 default).
