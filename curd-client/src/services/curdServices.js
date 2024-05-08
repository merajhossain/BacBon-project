import axios from "axios";


const allData = async () => {
    const allDataUrl = `${import.meta.env.VITE_API_URL}/sample-all`;
    try {
        const response = await axios.get(allDataUrl);
        return response.data;
    } catch (error) {
        return {
            status: 'error',
            data: error.message
        };
    }
};

const singleData = async (data) => {
    const singleDataUrl = `${import.meta.env.VITE_API_URL}/sample-single/${data}`;
    try {
        const response = await axios.get(singleDataUrl);
        return response.data;
    } catch (error) {
        return {
            status: 'error',
            data: error.message
        };
    }
};
const singleDataDelete = async (data) => {
    const singleDataUrl = `${import.meta.env.VITE_API_URL}/sample-delete/${data}`;
    try {
        const response = await axios.delete(singleDataUrl);
        return response.data;
    } catch (error) {
        return {
            status: 'error',
            data: error.message
        };
    }
};

const dataCreate = async (data) => {
    const createUrl = `${import.meta.env.VITE_API_URL}/sample-create`;
    try {
        const response = await axios.post(createUrl, data);
        return response.data;
    } catch (error) {
        return {
            status: 'error',
            data: error.message
        };
    }
};




export default ({
    dataCreate, allData, singleData, singleDataDelete
})

