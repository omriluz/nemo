// export const uploadService = {
//   uploadImg
// }
// function uploadImg(ev) {
//   const CLOUD_NAME = "dxjt9fumq"
//   const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

//   const formData = new FormData();
//   formData.append('upload_preset', 'kvmv1bdp');
//   formData.append('file', ev.target.files[0])

//   return fetch(UPLOAD_URL, {
//     method: 'POST',
//     body: formData
//   })
//     .then(res => res.json())
//     .then(res => {
//       return res
//     })
//     .catch(err => console.error(err))
// }




const uploadImg = async (ev) => {
  // Defining our variables
  const UPLOAD_PRESET = 'kvmv1bdp' // Insert yours
  const CLOUD_NAME = 'dxjt9fumq' // Insert yours
  const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
  const FORM_DATA = new FormData();
  // Building the request body
  FORM_DATA.append('file', ev.target.files[0])
  FORM_DATA.append('upload_preset', UPLOAD_PRESET)
  // Sending a post method request to Cloudniarys' API
  try {
      const res = await fetch(UPLOAD_URL, {
          method: 'POST',
          body: FORM_DATA
      })
      // const elImg = document.createElement('img');
      const { url } = await res.json()
      return url
      // elImg.src = url;
      // document.body.append(elImg);
  } catch (err) {
      console.error('ERROR!', err)
  }
}

export const uploadService = {
  uploadImg
}