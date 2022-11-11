import { useEffect } from 'react';

//dynamic title's hook

const useTitle = title => {
        useEffect(() => {
            document.title = `${title} - Home Service`;
        }, [title])
}
export default useTitle;