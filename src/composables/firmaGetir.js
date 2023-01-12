import {ref} from "vue"
import {firestoreRef} from "../firebase/config"
import {useStore} from 'vuex'

const firmaGetir=()=>{
	const store = useStore()


	const firmaYukle = async ()=>{
		await firestoreRef.collection("firmalar").get()
		.then(snap=>{
			snap.forEach(doc=>{
				//console.log(doc.data().resim)
				store.dispatch("getSirketler",doc.data().resim)
			})
		})
	}

	return {firmaYukle}
}

export default firmaGetir