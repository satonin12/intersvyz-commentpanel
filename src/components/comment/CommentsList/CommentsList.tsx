import React, {FC} from 'react';
import CommentItem from '../CommentItem/CommentItem';
import{useCommentsList} from './useCommentsList';
import {IComment} from '../../../types';

const CommentsList: FC = () => {
	const {
		values: {
			comments
		},
		handlers: {
			toggleRatingUp,
			toggleRatingDown
		}
	} = useCommentsList();

	console.log('comments: ', comments)

	return (
		<>
			{comments.map((item : IComment) => (
				<CommentItem
					key={item.id}
					id={item.id}
					name={item.name}
					date={item.time}
					rating={item.rating}
					comment={item.comment}
					increment={toggleRatingUp}
					dicrement={toggleRatingDown}

				/>
			))}
		</>
	);
};

export default React.memo(CommentsList);