import React from 'react'
import StarIcon from 'react-icons/lib/md/star-outline'
import PencilIcon from 'react-icons/lib/ti/pencil'
import TimesIcon from 'react-icons/lib/ti/times'
import HeartIcon from 'react-icons/lib/ti/heart-outline'
import MessageIcon from 'react-icons/lib/ti/message'

import './style.sass'

export default props => (
    <div className="area-minified">
      <div className="article">
        <div className="article-header">
          <div className="article-author">
            <div className="img-author">
              <img src="https://www.w3schools.com/w3css/img_avatar2.png" alt="" />
            </div>
            <div className="info-author">
              <h3>Thiago Skibinski</h3>
              <p>Bachelor in Information Systems, 23 yo.</p>
            </div>
          </div>
        </div>
        <div className="article-body">
          <div className="article-options">
            <a href="#">
              <HeartIcon size={30}/>
            </a>
            <a href="#">
              <MessageIcon size={30}/>
            </a>
            <a href="#">
              <StarIcon size={30}/>
            </a>
            <a href="#">
              <PencilIcon size={30} />
            </a>
            <a href="#">
              <TimesIcon size={30} />
            </a>
          </div>
          <div>
            <h2>Is React w/ Redux really good?</h2>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
            <p>Mussum Ipsum, cacilds vidis litro abertis. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Copo furadis é disculpa de bebadis, arcu quam euismod magna.</p>
          </div>
        </div>
      </div>
      <div className="comments">
        <h4>Comments:</h4>
        <div className="block-comments">
          <div className="comment">
            <div className="comment-img">
              <img src="https://www.w3schools.com/w3css/img_avatar2.png" alt="" />
            </div>
            <div className="comment-opinion">
              <div className="comment-header">
                <p className="comment-author">Sophia says:</p>
                <div className="comment-options">
                  <a href="#"><PencilIcon size={20} /></a>
                  <a href="#"><TimesIcon size={20} /></a>
                </div>
              </div>
              <p>This is so good! I'm falling in love with react/redux.</p>
              <small className="comment-info">29/10/2017 • <a href="#">Like</a> (15)</small>
            </div>
          </div>
          <div className="comment">
            <div className="comment-img">
              <img src="https://www.w3schools.com/w3css/img_avatar2.png" alt="" />
            </div>
            <div className="comment-opinion">
              <div className="comment-header">
                <p className="comment-author">Ryan says:</p>
                <div className="comment-options">
                  <a href="#"><PencilIcon size={20} /></a>
                  <a href="#"><TimesIcon size={20} /></a>
                </div>
              </div>
              <p>Yeah! is really f** good.</p>
              <small className="comment-info">29/10/2017 • <a href="#">Like</a> (15)</small>
            </div>
          </div>
        </div>
        <div>
          <form>
            <div className="form-group">
              <label>Identify yourself:</label>
              <input className="form-control" type="text" placeholder="Your name here" />
            </div>
            <textarea className="form-control" placeholder="Your message here" rows="5"></textarea>
            <div className="form-button text-right">
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
)
