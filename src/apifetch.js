const apifetch = async (url = '', options = null, errMsg = null) => {

    try {
        const data = await fetch(url, options);
        if (!data) throw Error("Error to fetch data");
        console.log(data.json())
    }
    catch (err) {
        errMsg = err.Message;
    }
    finally {
        return errMsg;

    }



}

export default apifetch;