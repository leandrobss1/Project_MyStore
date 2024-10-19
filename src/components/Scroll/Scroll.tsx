import React from 'react';
import styled from 'styled-components';

import * as S from './styles';

export const ScrollToTop = () => {
	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<S.ScrollToTopButton onClick={scrollToTop}>
			<S.ScrollToTopIcon
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M12 4l6 6-1.41 1.41L12 6.83l-4.59 4.58L6 10l6-6z'
					fill='currentColor'
				/>
			</S.ScrollToTopIcon>
		</S.ScrollToTopButton>
	);
};

export default ScrollToTop;
