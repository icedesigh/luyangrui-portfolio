import React from 'react'

export default function Nav(){
  return (
    <nav className="nav" aria-label="主导航">
      <div className="brand">刘洋睿</div>
      <div className="links">
        <a href="#about">关于我</a>
        <a href="#projects">精选项目</a>
        <a href="#skills">���的优势</a>
        <a href="#contact" className="btn">联系我</a>
      </div>
    </nav>
  )
}
