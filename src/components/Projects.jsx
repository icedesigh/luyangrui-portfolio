import React from 'react'

const sampleProjects = [
  {id:1, title:'品牌视觉练习 A', desc:'以未来科技感为主题的品牌练习', image:'/project1.jpg'},
  {id:2, title:'海报设计系列 B', desc:'平面海报与 AI 合成实验', image:'/project2.jpg'},
  {id:3, title:'UI 概念 C', desc:'暗色系仪表盘概念设计', image:'/project3.jpg'},
  {id:4, title:'AI 生成图 D', desc:'用 AI 辅助生成的视觉资产', image:'/project4.jpg'}
]

export default function Projects(){
  return (
    <section className="section" id="projects" aria-label="精选项目">
      <h3 style={{marginTop:0}}>精选项目</h3>
      <div className="projects-grid" style={{marginTop:16}}>
        {sampleProjects.map(p => (
          <article className="project-card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <div className="overlay">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          </article>
        ))}
      </div>
      <p style={{color:'var(--muted)', marginTop:16}}>提示：当前是占位作品，运行后请替换 public 下的 projectN.jpg 为你的作品截图。</p>
    </section>
  )
}
