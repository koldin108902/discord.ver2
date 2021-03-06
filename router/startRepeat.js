const fs = require("fs")

module.exports = (msg) => {
    const path = 'public/repeatData.json'
    let {dataes} = JSON.parse(fs.readFileSync(path, 'utf8'))

    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    
    // for (data of dataes) {
    //     if(msg.author.id === data.userId) return msg.channel.send("이미 반복작업을 실행 중입니다.")
    // } //해당 유저가 반복을 실행했는가?

    dataes.push({
        userId: msg.author.id,
        time: `${year}-${month}-${day} | ${hour} : ${minutes}`,
        count: 0,
        message: msg.content.slice(4),
        channel: msg.channel
    }) //JSON데이터 추가

    fs.writeFileSync(path, JSON.stringify({dataes}), 'utf8')
}