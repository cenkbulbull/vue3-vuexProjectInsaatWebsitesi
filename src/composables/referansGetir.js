import {ref} from "vue"
import {firestoreRef} from "../firebase/config"
import {useStore} from 'vuex'

const referansGetir=()=>{
	const store = useStore()
	const referanslar = ref([])


	const referansYukle = async ()=>{
		await firestoreRef.collection("referanslar").get()
		.then(snap=>{
			snap.forEach(doc=>{
				//console.log(doc.data())
				referanslar.value.push(doc.data())
				//console.log(referanslar)
			})
			store.dispatch("getReferanslar",referanslar)
		})
	}

	return {referansYukle}
}

export default referansGetir