import { v2 as cloudinary } from 'cloudinary'
import multer from 'multer'
import * as fs from 'fs'

cloudinary.config({
  cloud_name: 'dck3z93x5',
  api_key: '958848183433213',
  api_secret: 'hoZys5CcfirZpIrYgTQihz7fI6M',
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const uploadToCloudinary = async (file: any) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file.path,
      { public_id: file.originalname },
      function (error, result) {
        console.log(result)
        fs.unlinkSync(file.path)
        if (error) {
          reject(error)
        } else {
          resolve(result)
        }
      },
    )
  })
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(
      null,
      '/web-development/Resume Projects/share-wave/share-wave-server/uploads',
    )
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

export const upload = multer({ storage: storage })
