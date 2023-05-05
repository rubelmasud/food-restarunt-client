import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title}- Foods-Restaurant`
    }, [title])
}

export default useTitle