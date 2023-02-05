import React from 'react'

const Planet = () => {

    const [item, SetItem] = React.useState(null)

    const style = {
        background: 'black',
        margin: '5px',
        borderRadius: '5px',
        padding: '8px',
        color: 'white',
        cursor: 'pointer',
        textAlign: 'center',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

    const dog = {
        marginTop: '20px',
        borderRadius: '8px',
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    }

    async function api() {
        const url = await fetch('https://dog.ceo/api/breeds/image/random')
        const res = await url.json()
        const img = res.message
        SetItem(img)
    }

    React.useEffect(() => {
        if (item !== null) {
            window.localStorage.setItem('img', item)
        }
    }, [item])

    React.useEffect(() => {
        const localDog = window.localStorage.getItem('img') 
        if (localDog !== null) {
            SetItem(localDog)
        }
    })

    return (
        <section>
            <buttton onClick={api} style={style} id='1'>Gerar imagem aleatoria de cachorro.</buttton>
            {item && <img style={dog} src={item}/>}
        </section>
    )

}

export default Planet

