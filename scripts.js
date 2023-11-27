

// // const sum = numbers.reduce((acc, currentValue) => acc + currentValue)

// // console.log(`Soma dos números: ${sum}`)

// // const squaredNumbers = numbers.reduce((acc, currentValue) => {
// //   acc.push(currentValue * currentValue)
// //   return acc
// // }, [])

// // console.log(squaredNumbers)

// // const elements = ['maçã', 'banana', 'maçã', 'laranja', 'banana', 'maçã']

// // const grouped = elements.reduce((acc, currentValue) => {
// //   if (!acc[currentValue]) {
// //     acc[currentValue] = []
// //   }

// //   acc[currentValue].push(currentValue)

// //   return acc
// // }, {})

// // {
// //   maça: [maça]
// //   banana: []
// //   laranja: []
// // }

// // console.log(grouped)

// // const numbers = [1, 2, 3, 4, 5]

// // const numbers = [1, 2, 3, 4, 5]

// // const allGreaterThanZero = numbers.reduce((acc, currentValue) => {
// //   return acc && currentValue > 0
// // }, true)

// // const allGreaterThanZero = numbers.every((number) => number > 0)

// // console.log(allGreaterThanZero)
// // Math

// // console.log(Math.abs(5))
// // console.log(Math.round(2.33))
// // console.log(Math.floor(2.78))
// // console.log(Math.ceil(2.99))

// // console.log(Math.PI)

// // console.log(Math.pow(2, 8))

// // console.log(Math.random())

// // console.log(Math.sqrt(121))
// // console.log(Math)


// // const currentDate = new Date()

// // console.log(currentDate.getDay())

// // const today = new Date()

// // const options = {
// //   weekday: 'long',
// //   year: 'numeric',
// //   month: 'long',
// //   day: 'numeric'
// // }

// // console.log(today.toLocaleDateString('en', options))


// const promessa = new Promise((resolve, reject) => {
//   let condicao = true

//   if (condicao) {
//     setTimeout(() => {
//       resolve('Ok! Tudo certo.')
//     }, 5000)
//   } else {
//     reject('Um erro ocorreu.')
//   }
// })

// promessa
//   .then(response => console.log(response))
//   .catch(error => console.log('Erro', error))
//   .finally(() => console.log('Finalizou'))

// function fetchUsers() {
//   api.get('/bodies')
//     .then(response => {
//       const bodies = response.data.bodies

//       console.log(bodies)
//     })
//     .catch(error => console.log('Erro: ', error))
//     .finally(() => console.log('Finalizou!'))
// }

// fetchUsers()

// async function fetchBodies() {
//   try {
//     const response = await api.get('/bodies')
//     const bodies = response.data.bodies

//     console.log(bodies)
//   }

//   catch (error) {
//     console.log('Erro: ', error)
//   }

//   finally {
//     console.log('Finalizou!')
//   }
// }

// fetchBodies()

// async function getBodies() {
//   console.log("Buscando dados...");
//   const result = await axios.get("https://api.le-systeme-solaire.net/rest/bodies/");
//   corposCelestes = result.data.bodies;
// }

// getBodies()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.error("Erro");
//   })
//   .finally(() => {
//     console.log('Terminou');
//   }) //função assincorna

async function fetchCharacters(status) {
  try {
    const response = await api.get(`character?status=${status}`)
    const character = response.data.results
    console.log(character);


  } catch (error) {
    console.log('Erro: ', error);
  } finally {
    console.log('Finalizou');
  }
}
fetchCharacters('unknown')


async function findCharacterByName(name) {
  try {
    const response = await api.get(`character?name=${name}`);
    console.log(response.data.results)

  } catch (error) {
    console.log("Nome não localizado!")
  }

}

// const name = prompt("Digite o nome a ser encontrado: ")
// findCharacterByName(name)


async function listEpisode(season) {
  try {
    const response = await api.get(`episode?episode=S0${season}`)
    const result = response.data.results
    result.forEach(episodioNome => console.log(`Episodio: ${episodioNome.name}`))
  }
  catch (error) {
    console.log(`Está temporada não existe!`);
  }
}

// listEpisode(Number(prompt(`Digite o numero da temporada:`)))

async function episodeDetails(episode) {
  try {
    const response = await api.get(`episode/${episode}`)
    const result = response.data
    console.log(`Episode: ${result.episode} | Name: ${result.name}`)
  }
  catch (error) {
    console.log(`Episódio ${episode} não encontrado!!`);
  }
}

episodeDetails(prompt("Digite o ID do episódio!"))