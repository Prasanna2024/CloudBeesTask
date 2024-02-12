import axios from 'axios'
const accessToken = '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'
export const getUserList = async () => {
    const userdatas = await axios.get(process.env.REACT_APP_USERS,
        {
            headers: {
                Authorization: `token ${accessToken}`
            }
        }
    );
    return userdatas.data;
}

export const getUser = async (username) => {
    const userdatas = await axios.get(process.env.REACT_APP_USERS + "/" + username,
        {
            headers: {
                Authorization: `token ${accessToken}`
            }
        });
    return userdatas.data;
}