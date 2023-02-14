const content = document.getElementById("content")
const date = document.getElementById("date")
const time = document.getElementById("time")
const addBtn = document.getElementById("addBtn")
const deleteBtn = document.getElementById("deleteBtn")
const list = document.getElementById("list")

// 儲存 notes
const listContent = []

// 渲染 list，將 list 全部內容儲存成 htmlStr
function render() {
    let htmlStr = ""

    listContent.forEach(function (item) {
        htmlStr = htmlStr + `
        <div class="item">
            <div>
                <p>Content: ${item.content}</p>
                <p>Time: ${item.date} ${item.time}</p>
            </div>
        </div>
        `
    })

    // 將 div -> list 的內容更新
    list.innerHTML = htmlStr
}

// 對按鈕建立監聽器
addBtn.addEventListener('click', function () {

    listContent.unshift({
        content: content.value,
        date: date.value,
        time: time.value
    })

    render()
})


deleteBtn.addEventListener('click', function () {
    listContent.pop()

    render()
})