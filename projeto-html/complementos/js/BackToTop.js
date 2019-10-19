class BackToTop {   
    constructor()
    {
        this.element = document.querySelector('.footer .btn__back-to-top');

        this.element.addEventListener('click', this.handleClick.bind(event,this),);
    }

    handleClick(_instance, event){
        
        _instance.interval = setInterval(() => {
            if(window.scrollY <= 0)
            return clearInterval(_instance.interval);
            window.scrollTo(0,window.scrollY - 10);

        }, 10);
    }
}