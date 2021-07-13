import express from 'express'
import auth from '../middleware/auth.js'
import upload from '../middleware/upload.js'

import {
  newProduct,
  getProduct,
  getAllProduct,
  getProductById,
  editProduct
} from '../controllers/products.js'

const router = express.Router()

// 新增商品，要驗證有沒有權限
router.post('/', auth, upload, newProduct)
// 檢視商品 (一般消費者)
router.get('/', getProduct)
// 檢視商品 (後臺管理者)
router.get('/all', auth, getAllProduct)
// 個別商品頁面
router.get('/:id', getProductById)
// 編輯商品
router.patch('/:id', auth, upload, editProduct)

export default router
