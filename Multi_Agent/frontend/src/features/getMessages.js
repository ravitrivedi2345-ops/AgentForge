
import api from '../../utils/axios'

async function getMessages(id) {
try {
    const {data}=await api.get(`/api/chat/get-messages/${id}`)
    console.log(data)
    return Array.isArray(data) ? data : []
} catch (error) {
    console.log(error)
    return []
}
}

export default getMessages
