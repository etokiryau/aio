export const useChangeTitle = () => {

    const changeTitle = (pathname) => {
        const mainPart = pathname.split('/')[1];
        
        if (pathname === '/') {
            return document.title = 'High-tech projects of cottages | aio';
        }

        const title = mainPart.charAt(0).toUpperCase() + mainPart.slice(1);
    
        document.title = title;
    }

    return {changeTitle};
}

