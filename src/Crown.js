import { useState } from 'react'
import supabase from './supa-client'

function Crown() {
    const [me, setNewMe] = useState('temp')

    async function setName () {
        try {
            const { data, error } = await supabase.from('poster').insert({ name: 'Saura' }).select()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
      }

    async function insertPost (name) {
        try {
            const { data, error } = await supabase.from('post').insert({ id: 5, poster_name: 'Saura', thread_id: 1, content: "New Post!!!!" }).select()
            if (error) {
                console.log(error)
            } else {
                console.log(data)
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    async function nameAndPost () {
        const nameMe = await setName()
        await insertPost(nameMe)
        console.log("All Done")
    }

  return (
    <div>
        Crown asdf
        {me}
        <button onClick={nameAndPost}>Get List</button>
    </div>
  )
}

export default Crown

/*

function getProduct(a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(a * b);
    }, 1000);
  });
}




const printResult = async () => {
  try {
    const product = await getProduct(2, 4); // line 1
    const finalResult = await getProduct(product, 2); // line 2
    console.log('final_result', finalResult); // line 3
  } catch (error) {
    console.log(error);
  }
};

printResult();

*/