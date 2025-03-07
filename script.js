const blockMain1 = document.getElementById('block1')
const blockMain2 = document.getElementById('block2')
const infoText = document.getElementById('infoText')
const buttonInstall = document.getElementById('instal_footer')
const main = document.querySelector('main')

setTimeout(() => {
    blockMain1.classList.add('slide-in-left')
    blockMain2.classList.add('slide-in-right')

},500)

blockMain1.addEventListener('animationend', ()=> {
    infoText.classList.add('focus-in-expand')
})

setInterval(()=>{

    buttonInstall.classList.add('shake-bottom')
    buttonInstall.addEventListener('animationend', ()=> {
        buttonInstall.classList.remove('shake-bottom')
    })
    
},5000)   


infoText.addEventListener('animationend', () => {
const moreInfo = document.createElement('div')
moreInfo.className = 'moreInfo'

const moreInfoButton = document.createElement('a')
moreInfoButton.className = 'moreInfoButton'
moreInfoButton.classList.add('slide-in-left')
moreInfoButton.textContent = 'Click if you wanna see more'
moreInfoButton.href = '#exampleWorks'

main.appendChild(moreInfo)
moreInfo.appendChild(moreInfoButton)

moreInfoButton.addEventListener('click', ()=> {
     
    moreInfoButton.remove()
    
    const exampleWorks = document.createElement('div')
    exampleWorks.className = 'exampleWorks'
    exampleWorks.id = 'exampleWorks'
    exampleWorks.classList.add('swing-in-top-fwd')

    const removeBGBlock = document.createElement('div')
    removeBGBlock.className = 'removeBGBlock'

    const girlWithoutBg = document.createElement('img')
    girlWithoutBg.className = 'girlWithoutBg'
    girlWithoutBg.src = 'aigirl.webp'


    const changeColor = document.createElement('input')
    changeColor.className = 'changeColor'
    changeColor.type = 'color'

    const uploadFile = document.createElement('input')
    uploadFile.className = 'uploadFile'
    uploadFile.type = 'file'
    uploadFile.placeholder= 'Upload your background'

   
    
    const buttonChangeColor  = document.createElement('button')
    buttonChangeColor.className = 'buttonChangeColor'
    buttonChangeColor.textContent = 'Change background color'
    buttonChangeColor.addEventListener('click', ()=> {
        removeBGBlock.style.backgroundColor = changeColor.value
        removeBGBlock.style.backgroundImage = 'none'
        
    })
    
    
    const buttonRemoveBg  = document.createElement('button')
    buttonRemoveBg.className = 'buttonRemoveBg'
    buttonRemoveBg.textContent = 'Remove background'
    buttonRemoveBg.addEventListener('click', () => {
        removeBGBlock.style.backgroundImage = 'url(bg-img.jpg)'
    })

    const buttonChangebgFile  = document.createElement('button')
    buttonChangebgFile.className = 'buttonChangebgFile'
    buttonChangebgFile.textContent = 'Change background'
    uploadFile.addEventListener('change', ()=> {
            const file = event.target.files[0]
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    removeBGBlock.style.backgroundImage = `url(${e.target.result})`;
                };
                reader.readAsDataURL(file); 
                
            }
        })
        buttonChangebgFile.addEventListener('click', () => {
            uploadFile.click();
        
        
        
    })



    main.appendChild(exampleWorks)
    exampleWorks.appendChild (removeBGBlock)
    removeBGBlock.appendChild(girlWithoutBg)
    exampleWorks.appendChild(changeColor)
    exampleWorks.appendChild(uploadFile)
    exampleWorks.appendChild(buttonChangeColor)
    exampleWorks.appendChild(buttonRemoveBg)
    exampleWorks.appendChild(buttonChangebgFile)
    
    })

} )



