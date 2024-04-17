import toast, { Toaster } from 'react-hot-toast';


const notifyMessage = (message)  =>{
    toast(message,{
        duration: 2000,
        position: 'top-right',
    });

}

const notifySuccess = (message) => {
    toast.success(message, {
        duration: 2000,
        position: 'top-right',
    }); 
}

const notifyError = (message) => {
    toast.error(message, {
        duration: 2000,
        position: 'top-right',
        style:{
            maxWidth: '450px',
            maxHeight: '200px',
        }
    });
}


export { notifySuccess, notifyError , notifyMessage};