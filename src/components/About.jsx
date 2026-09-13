import React from 'react'

export default function About(){
  return (
    <section className="section about" id="about" aria-label="关于我">
      <div className="avatar">
        {/* 占位头像：请替换 public/avatar.jpg */}
        <img src="/avatar.jpg" alt="刘洋睿 头像" />
      </div>
      <div className="bio">
        <h3>关于我</h3>
        <p>
          我是视觉设计师 / AI设计师 / 品牌设计师。现在就读于江西水利电力大学供应链管理大一，热衷于把 AI 能力与视觉设计结合，打造有辨识度且富有科技感的品牌视觉体验。虽然目前没有商业项目经验，但我在不断练习与探索视觉系统、动效与品牌表达。
        </p>

        <div style={{marginTop:18}}>
          <div style={{display:'flex', gap:18}}>
            <div style={{background:'rgba(255,255,255,0.02)', padding:12, borderRadius:10}}>
              <div style={{color:'#9aa4ad'}}>项目数据</div>
              <div style={{fontWeight:700, fontSize:20}}>—</div>
            </div>

            <div style={{background:'rgba(255,255,255,0.02)', padding:12, borderRadius:10}}>
              <div style={{color:'#9aa4ad'}}>实习/工作</div>
              <div style={{fontWeight:700, fontSize:20}}>无</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
