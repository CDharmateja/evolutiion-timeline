import {openDB} from 'idb'

class DBHelper {
  constructor() {
    this.dbPromise = this.createDB()
  }

  createDB() {
    return openDB('evolution-timeline', 1, {
      // eslint-disable-next-line
      upgrade(db, oldVersion, newVersion, transaction) {
        /* eslint-disable */
        switch(upgradeDB.oldVersion) {
          case 0:
            // ...
          case 1:
            db.createObjectStore('evolution-timeline', {
              keyPath: 'id',
              autoIncrement: true
            })
        }
        /* eslint-enable */
      }
    })
    // return openDB('evolution-timeline', 1, upgradeDB => {
    //   /* eslint-disable */
    //   switch(upgradeDB.oldVersion) {
    //     case 0:
    //       // ...
    //     case 1:
    //       upgradeDB.createObjectStore('evolution-timeline', {
    //         keyPath: 'id',
    //         autoIncrement: true
    //       })
    //   }
    //   /* eslint-enable */
    // })
  }

  getEvolutionJson() {
    return new Promise(async (resolve, reject) => {
      try {
        const db = await this.dbPromise
        const tx = db.transaction('evolution-timeline')
        const store = tx.objectStore('evolution-timeline')
        let json = store.getAll()
        if (json === undefined || json === {}) {
          json = await this.fetchEvolutionTreeJson()
          json.map(species => {
            store.add(species)
          })
        }
        tx.complete
        resolve(json)
      } catch (error) {
        reject(`Error: ${error.stack}`)
      }
    })
  }

  fetchEvolutionTreeJson() {
    return new Promise(async (resolve, reject) => {
      try {
        const url = 'https://express.cdharmateja.now.sh/'
        const resp = await fetch(url)
        const json = await resp.json()
        resolve(json)
      } catch(error) {
        reject(`Error: ${error.stack}`)
      }
    })
  }
}

export default new DBHelper()