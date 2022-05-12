const products = [
    {
        name: 'Styled Ameba Hat',
        image: 'https://i.ibb.co/xLTM5MF/ok-24.png',
        categorie: 'hat',
        color: '#636DB0',
        price: '50,00',
        stock: 20,
        description: 'Chapéu com amebas palhetosas e detalhes em branco com preto. Style for you',
        visits: 0
    },
    {
        name: 'Chapéu meio desbotado',
        image: 'https://i.ibb.co/Mhj6wTv/ok-25.png',
        categorie: 'hat',
        color: '#655B51',
        price: '40,00',
        stock: 20,
        description: 'Ótimo chapéu para quem gosta de coisa velha que é nova',
        visits: 0
    },
    {
        name: 'Chapéu do Grêmio borrado',
        image: 'https://i.ibb.co/2MsG4kn/ok-23.png',
        categorie: 'hat',
        color: '#527AD9',
        price: '40,00',
        stock: 20,
        description: 'Você gremista que gosta de chapéus que lembrem as cores do Grêmio, Style for you',
        visits: 0
    },
    {
        name: 'Blue Gorro',
        image: 'https://i.ibb.co/VQZ7sr5/ok-22.png',
        categorie: 'bonnet',
        color: '#FFF',
        price: '45,00',
        stock: 20,
        description: 'It is a bonnet, blue bonnet. Style for you',
        visits: 0
    },
    {
        name: 'Adventurer Adventure',
        image: 'https://i.ibb.co/4Sg30r7/ok-21.png',
        categorie: 'hat',
        color: '#8E8E8C',
        price: '60,00',
        stock: 20,
        description: 'Chapéu para aventuras na selva. Adventure for you',
        visits: 0
    },
    {
        name: 'Disco Voador',
        image: 'https://i.ibb.co/Z6pQpqH/ok-20.png',
        categorie: 'hat',
        color: '#847878',
        price: '70,00',
        stock: 20,
        description: 'Chapéu estilo OVNI, cor barro. OVNI for you',
        visits: 0
    },
    {
        name: 'Almofada Azul',
        image: 'https://i.ibb.co/7jS3N4c/ok-19.png',
        categorie: 'bonnet',
        color: '#FFF',
        price: '40,00',
        stock: 20,
        description: 'Gorro estilo almofada. Almofada for you',
        visits: 0
    },
    {
        name: 'Pimp Hat',
        image: 'https://i.ibb.co/DY5qmpx/ok-18.png',
        categorie: 'hat',
        color: '#564A18',
        price: '100,00',
        stock: 20,
        description: 'Chapéu bem pimp. Style for you',
        visits: 0
    },
    {
        name: 'Boné do Morango Único',
        image: 'https://i.ibb.co/jv2pyM0/ok-17.png',
        categorie: 'hat',
        color: '#F44353',
        price: '30,00',
        stock: 20,
        description: 'Único morango possível',
        visits: 0
    },
    {
        name: 'Boné Blasfêmico Rosinha',
        image: 'https://i.ibb.co/GWYDJYF/ok-16.png',
        categorie: 'cap',
        color: '#D3BB33',
        price: '35,00',
        stock: 20,
        description: '💩 for you',
        visits: 0
    },
    {
        name: 'Boné Cagacto',
        image: 'https://i.ibb.co/7zq1dxC/ok-15.png',
        categorie: 'cap',
        color: '#EE9F43',
        price: '35,00',
        stock: 20,
        description: 'Cat with Cacto Cap. Cacatcus for you',
        visits: 0
    },
    {
        name: 'Poorly Drawn Dyno Cap',
        image: 'https://i.ibb.co/KwqWM1W/ok-14.png',
        categorie: 'cap',
        color: '#FBF9EA',
        price: '40,00',
        stock: 20,
        description: 'A bad Trex scheleton for you',
        visits: 0
    },
    {
        name: 'Arminha do CS Hood',
        image: 'https://i.ibb.co/bPC3rD7/ok-13.png',
        categorie: 'hood',
        color: '#F3F4F6',
        price: '50,00',
        stock: 20,
        description: 'Nice AK for you (no bullets)',
        visits: 0
    },
    {
        name: 'Foxy Hood',
        image: 'https://i.ibb.co/QCmTXnN/ok-12.png',
        categorie: 'hood',
        color: '#EAD57C',
        price: '52,00',
        stock: 20,
        description: 'Fox in 3D Hood. Nice',
        visits: 0
    },
    {
        name: 'Nice Hat',
        image: 'https://i.ibb.co/0FDCnwy/ok-11.png',
        categorie: 'hat',
        color: '#0C1526',
        price: '60,00',
        stock: 20,
        description: 'Realmente gostei desse, compraria. Nice hat for you',
        visits: 0
    },
    {
        name: 'Chapéu do Grêmio quase certo',
        image: 'https://i.ibb.co/cY24bQK/ok-10.png',
        categorie: 'hat',
        color: '#DA252C',
        price: '45,00',
        stock: 20,
        description: 'Chapéu mais conscientemente mais parecido com o Grêmio que o borrado',
        visits: 0
    },
    {
        name: 'Consegui a foto rapaziada',
        image: 'https://i.ibb.co/RT0B7PC/ok-9.png',
        categorie: 'cap',
        color: '#E6263B',
        price: '50,00',
        stock: 20,
        description: 'Foi dificil mas ta ai. Photo allowed for you',
        visits: 0
    },
    {
        name: 'Yellow Eagle Hood',
        image: 'https://i.ibb.co/nmnW1Zw/ok-8.png',
        categorie: 'hood',
        color: '#F9F077',
        price: '45,00',
        stock: 20,
        description: 'A hood with an eagle, not much to say. Hood for you',
        visits: 0
    },
    {
        name: 'Indian Cowboy Hat',
        image: 'https://i.ibb.co/WyfyfwZ/ok-7.png',
        categorie: 'hat',
        color: '#877164',
        price: '70,00',
        stock: 20,
        description: 'Chapéu bom.',
        visits: 0
    },
    {
        name: 'Chapéu Cata Ovo com Lacinho',
        image: 'https://i.ibb.co/Cs1m9BL/ok-6.png',
        categorie: 'hat',
        color: '#9B131F',
        price: '75,00',
        stock: 20,
        description: 'Palha trançada, lacinho bonito, espaço para a cabeça, quer mais o que?',
        visits: 0
    },
    {
        name: 'Chapéu do Tiririca 2.0',
        image: 'https://i.ibb.co/Y0thxYK/ok-5.png',
        categorie: 'hat',
        color: '#EE5E5D',
        price: '75,00',
        stock: 20,
        description: 'Releitura do chapéu do Tiririca',
        visits: 0
    },
    {
        name: 'Flowered Hat',
        image: 'https://i.ibb.co/h2FF10d/ok-4.png',
        categorie: 'hat',
        color: '#FFF',
        price: '80,00',
        stock: 20,
        description: 'Flores e chapéus. Style for you',
        visits: 0
    },
    {
        name: 'White One',
        image: 'https://i.ibb.co/3dNCKKq/ok-3.png',
        categorie: 'hat',
        color: 'grey',
        price: '55,00',
        stock: 20,
        description: 'Just white and hat',
        visits: 0
    },
    {
        name: 'Touca Simples mas Qualitosa',
        image: 'https://i.ibb.co/J2ZfNMy/ok-2.png',
        categorie: 'hat',
        color: '#FFFFFF',
        price: '40,00',
        stock: 20,
        description: 'Just white and hat',
        visits: 0
    }
]

export default  products;