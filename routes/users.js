import express from 'express'
import auth from '../middleware/auth.js'
// 從 controller 引用 function
import {
  register,
  getuserinfo,
  login,
  logout,
  addCart,
  getCart,
  editCart,
  checkout,
  getorders,
  getallorders,
  extend
} from '../controllers/users.js'

// 建立 router
const router = express.Router()

// 此處'/' 路徑為 /users
// 註冊
router.post('/', register)
// 抓取使用者資料
router.get('/', auth, getuserinfo)
// 登入
router.post('/login', login)
// 登出，登出前驗證
router.delete('/logout', auth, logout)
// 加入購物車
router.post('/cart', auth, addCart)
// 購物車顯示
router.get('/cart', auth, getCart)
// 購物車內編輯商品
router.patch('/cart', auth, editCart)
// 結帳
router.post('/checkout', auth, checkout)
// 查詢自己的訂單
router.get('/orders', auth, getorders)
// 查詢所有訂單
router.get('/orders/all', auth, getallorders)
// 拿舊的 jwt 去換新 jwt
router.post('/extend', auth, extend)

// 匯出路由設定
export default router
