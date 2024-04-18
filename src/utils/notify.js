import toast from 'react-hot-toast';


const notifyMessage = (message)  =>{
    toast(message,{
        duration: 2000,
        position: 'top-right',
        style:{
            minWidth: '250px',
            minHeight: '50px',
            padding: '10px',
        }
    });

}

const notifySuccess = (message) => {
    toast.success(message, {
        duration: 2000,
        position: 'top-right',
        style: {
            minWidth: '250px',
            minHeight: '50px',
            padding:'10px',
        }
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