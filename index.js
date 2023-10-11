let dropdown = false
let subwl = document.querySelector('.weblink-a')
document.querySelector('.weblink').addEventListener('mouseover', () => {
    if(dropdown = true){
        subwl.style.display = 'flex'
        
    }else {
        subwl.style.display = 'none'
    }
})
document.querySelector('.weblink').addEventListener('mouseout', () => {
    if(dropdown === true){
        dropdown = false
        subwl.style.display = 'none'
        
    }
})
let dropdown2 = false
let subwl2 = document.querySelector('.wbla2')
document.querySelector('.wbl2').addEventListener('mouseover', () => {
    if(dropdown2 = true){
        subwl2.style.display = 'flex'
        
    }else {
        subwl2.style.display = 'none'
    }
})
document.querySelector('.wbl2').addEventListener('mouseout', () => {
    if(dropdown2 === true){
        dropdown2 = false
        subwl2.style.display = 'none'
        
    }
})
let dropdown3 = false
let subwl3 = document.querySelector('.wbla3')
document.querySelector('.wbl3').addEventListener('mouseover', () => {
    if(dropdown3 = true){
        subwl3.style.display = 'flex'
        
    }else {
        subwl3.style.display = 'none'
    }
})
document.querySelector('.wbl3').addEventListener('mouseout', () => {
    if(dropdown3 === true){
        dropdown3 = false
        subwl3.style.display = 'none'
    }
})
let dropdown4 = false
let subwl4 = document.querySelector('.wbla4')
document.querySelector('.wbl4').addEventListener('mouseover', () => {
    if(dropdown4 = true){
        subwl4.style.display = 'flex'
        
    }else {
        subwl4.style.display = 'none'
    }
})
document.querySelector('.wbl4').addEventListener('mouseout', () => {
    if(dropdown4 === true){
        dropdown4 = false
        subwl4.style.display = 'none'
        
    }
})


let mindropdown = false
let logoWebPages = document.querySelector('.logo-webpages')
let bars = document.querySelector('.fa-bars')
let times = document.querySelector('.fa-times')
document.querySelector('.bars').addEventListener('click', () => {
    if(mindropdown === true){
        mindropdown = false
        logoWebPages.style.height = '4.5rem'
        bars.style.display = 'flex'
        times.style.display = 'none'
    }else {
        mindropdown = true
        logoWebPages.style.height = 'auto'
        bars.style.display = 'none'
        times.style.display = 'flex'
    }
})
let minmindropdown = false
let weblinkA = document.querySelector('.weblinkA')
document.querySelector('.weblinkx').addEventListener('mouseover', () => {
    if(minmindropdown = true){
        logoWebPages.style.height = 'auto'
        weblinkA.style.display = 'flex'
    }else {
        logoWebPages.style.height = 'auto'
        weblinkA.style.display = 'flex'
    }
})
document.querySelector('.weblinkx').addEventListener('mouseout', () => {
    if(minmindropdown === true){
        logoWebPages.style.height =  'auto'
        weblinkA.style.display = 'none'
    }
})
let minmindropdown2 = false
let weblinkA2 = document.querySelector('.ax2')
document.querySelector('.wbx2').addEventListener('mouseover', () => {
    if(minmindropdown2 = true){
        logoWebPages.style.height = 'auto'
        weblinkA2.style.display = 'flex'
    }else {
        logoWebPages.style.height = 'auto'
        weblinkA2.style.display = 'flex'
    }
})
document.querySelector('.wbx2').addEventListener('mouseout', () => {
    if(minmindropdown2 === true){
        minmindropdown2 = false
        logoWebPages.style.height =  'auto'
        weblinkA2.style.display = 'none'
    }
})
let minmindropdown3 = false
let weblinkA3 = document.querySelector('.ax3')
document.querySelector('.wbx3').addEventListener('mouseover', () => {
    if(minmindropdown3 = true){
        logoWebPages.style.height = 'auto'
        weblinkA3.style.display = 'flex'
    }else {
        logoWebPages.style.height = 'auto'
        weblinkA3.style.display = 'flex'
    }
})
document.querySelector('.wbx3').addEventListener('mouseout', () => {
    if(minmindropdown3 === true){
        minmindropdown3 = false
        logoWebPages.style.height =  'auto'
        weblinkA3.style.display = 'none'
    }
})
let minmindropdown4 = false
let weblinkA4 = document.querySelector('.ax4')
document.querySelector('.wbx4').addEventListener('mouseover', () => {
    if(minmindropdown4 = true){
        logoWebPages.style.height = 'auto'
        weblinkA4.style.display = 'flex'
    }else {
        logoWebPages.style.height = 'auto'
        weblinkA4.style.display = 'flex'
    }
})
document.querySelector('.wbx4').addEventListener('mouseout', () => {
    if(minmindropdown4 === true){
        minmindropdown4 = false
        logoWebPages.style.height =  'auto'
        weblinkA4.style.display = 'none'
    }
})


let txtdown = false
let qst2 = document.querySelector('.qst2')
let plus = document.querySelector('.ii1')
let minus = document.querySelector('.fa-minus')
document.querySelector('.qst2').addEventListener('click', () => {
    if(txtdown === true){
        txtdown = false
        qst2.style.height = '3rem'
        minus.style.display = 'none'
        plus.style.display = 'block'
        // qst2.style.paddingBottom = '0rem'
        
    }else {
        txtdown = true
        qst2.style.height = 'auto'
        // qst2.style.paddingBottom = '1rem'
        minus.style.display = 'block'
        plus.style.display = 'none'
    }
})
let txtdown2 = false
let plus2 = document.querySelector('.ii2')
let minus2 = document.querySelector('.ixx1')
let qsttwo = document.querySelector('.qsttwo')
document.querySelector('.qsttwo').addEventListener('click', () => {
    if(txtdown2 === true){
        txtdown2 = false
        qsttwo.style.height = '3rem'
        minus2.style.display = 'none'
        plus2.style.display = 'block'
        
    }else {
        txtdown2 = true
        qsttwo.style.height = 'auto'
        minus2.style.display = 'block'
        plus2.style.display = 'none'
    }
})
let txtdown3 = false
let plus3 = document.querySelector('.ii3')
let minus3 = document.querySelector('.ixx2')
let qstthree = document.querySelector('.qstthree')
document.querySelector('.qstthree').addEventListener('click', () => {
    if(txtdown3 === true){
        txtdown3 = false
        qstthree.style.height = '3rem'
        minus3.style.display = 'none'
        plus3.style.display = 'block'
        
    }else {
        txtdown3 = true
        qstthree.style.height = 'auto'
        minus3.style.display = 'block'
        plus3.style.display = 'none'
    }
})
let txtdown4 = false
let plus4 = document.querySelector('.ii4')
let minus4 = document.querySelector('.ixx3')
let qstfour = document.querySelector('.qstfour')
document.querySelector('.qstfour').addEventListener('click', () => {
    if(txtdown4 === true){
        txtdown4 = false
        qstfour.style.height = '3rem'
        minus4.style.display = 'none'
        plus4.style.display = 'block'
        
    }else {
        txtdown4 = true
        qstfour.style.height = 'auto'
        minus4.style.display = 'block'
        plus4.style.display = 'none'
    }
})
let txtdown5 = false
let plus5 = document.querySelector('.ii5')
let minus5 = document.querySelector('.ixx4')
let qstfive = document.querySelector('.qstfive')
document.querySelector('.qstfive').addEventListener('click', () => {
    if(txtdown5 === true){
        txtdown5 = false
        qstfive.style.height = '3rem'
        minus5.style.display = 'none'
        plus5.style.display = 'block'
        
    }else {
        txtdown5 = true
        qstfive.style.height = 'auto'
        minus5.style.display = 'block'
        plus5.style.display = 'none'
    }
})

