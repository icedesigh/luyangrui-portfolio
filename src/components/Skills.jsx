import React from 'react'

const skills = [
  {id:'s1', title:'视觉设计', desc:'版式、色彩、排版、海报与图形设计'},
  {id:'s2', title:'AI 辅助设计', desc:'使用生成式 AI 快速产出视觉素材与迭代方案'},
  {id:'s3', title:'品牌识别', desc:'Logo、品牌色、识别系统构建'},
  {id:'s4', title:'沟通与表达', desc:'善于把复杂理念视觉化并形成展示材料'}
]

export default function Skills(){
  return (
    <section className="section" id="skills" aria-label="我的优势">
      <h3 style={{marginTop:0}}>个人优势</h3>
      <div className="skills-grid" style={{marginTop:16}}>
        {skills.map(s => (
          <div className="skill-card" key={s.id}>
            <h4 style={{margin:0}}>{s.title}</h4>
            <p style={{color:'var(--muted)', marginTop:10}}>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
