import { useState } from 'react';
import { Formik, Form, Field } from 'formik';

import chat from './img/chat.svg';

import './taskComments.scss';

const TaskComment = () => {
    const [commentList, setCommentList] = useState([
        {date: new Date().toLocaleDateString(), text: 'Есть замечания к толщине вертикальных швов. Судя по фото, толщина свыше 30мм.'}]);

    const updateCommentList = (data) => {
        const currentDate = new Date().toLocaleDateString();
        const newComment = {date: currentDate, text: data};
        setCommentList([...commentList, newComment]);
    }

    const renderCommentContent = (data) => {
        const commentContent = data.map((item, i) => {
            return (
                <div key={i} className="comments__list-piece">
                    <p name="text">{item.text}</p>
                    <p name="date">{item.date}</p>
                </div>
            )
        })

        return commentContent;
    }
    
    const commentContent = renderCommentContent(commentList);
    
    return (
        <div className="comments">
            <div className="comments__list">
                {commentContent}
            </div>
            <div>
                <Formik
                    initialValues = {{
                        comment: ''
                    }}
                    onSubmit = { ({comment}, {resetForm}) => {
                        if (comment.length) {
                            updateCommentList(comment);
                            resetForm({comment: ''});
                        }
                    }}
                >
                    <Form>
                        <div className="comments__add">
                            <button 
                                type="submit">
                                <img src={chat} alt="chat" />
                            </button>
                            <Field 
                                id="comment" 
                                name="comment" 
                                type="text" 
                                placeholder="Comment"
                                autocomplete="off"/>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default TaskComment;