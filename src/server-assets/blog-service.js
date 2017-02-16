import mockData from "./MOCK_DATA.json"

let blogService = {
    getBlogs() {
        return mockData
    },
    getBlog(id) {
        return mockData[id]
    },
    addBlog(title, text) {
        console.log({title, text})
        mockData.push({title, text})
    },
    editBlog(id, text) {
        console.log(id, text)
        mockData[id].text = text
        console.log(mockData[id])
    }
}
export default blogService