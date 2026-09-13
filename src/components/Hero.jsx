import React from 'react'

export default function Hero(){
  return (
    <section className="hero section" id="home" aria-label="首页">
      <div className="video-wrap">
        {/* 占位视频：请替换 public/video.mp4 */}
        <video autoPlay muted loop playsInline src="/video.mp4" />
      </div>

      <div className="hero-inner">
        <div className="left">
          <h1>刘洋睿 — 视觉设计师 · AI设计师 · 品牌设计师</h1>
          <p className="lead">
            专注于简洁、高级且有科技感的视觉体系构建。现就读江西水利电力大学供应链管理大一，热衷于把 AI 能力与视觉设计结合，打造有辨识度且富有科技感的品牌视觉体验。
          </p>
          <div className="cta">
            <a className="btn primary" href="#contact">立即联系</a>
            <a className="btn" href="#projects">查看作品</a>
          </div>
        </div>

        <aside className="meta" aria-hidden>
          <div className="row"><div>微信</div><div className="big">ruiand0622</div></div>
          <div className="row"><div>QQ</div><div className="big">3545935829</div></div>
          <div className="row"><div>电话</div><div className="big">15797976978</div></div>
          <div style={{height:12}}></div>
          <div className="row"><div>身份</div><div>视觉 / AI / 品牌</div></div>
          <div className="row"><div>学校</div><div>江西水利电力大学</div></div>
        </aside>
      </div>
    </section>
  )
}
