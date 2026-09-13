import React from 'react'

export default function Contact(){
  return (
    <footer className="contact" id="contact" aria-label="联系我">
      <div className="inner">
        <div className="left">
          <h2>想聊合作或交流？</h2>
          <p className="info">
            电话: 15797976978<br/>
            微信: ruiand0622<br/>
            QQ: 3545935829<br/>
            学校: 江西水利电力大学<br/>
            身份: 视觉设计师 / AI设计师 / 品牌设计师
          </p>
        </div>
        <div className="right" style={{textAlign:'right'}}>
          <a className="btn primary" href="mailto:3545935829@qq.com">发送邮件</a>
          <div style={{height:18}}/>
          <p style={{color:'var(--muted)'}}>底部页为整屏收尾，可用于放置更大联系方式或社媒二维码。</p>
        </div>
      </div>
    </footer>
  )
}
