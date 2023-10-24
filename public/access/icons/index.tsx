import { forwardRef } from "react";

export const IconsLogo = forwardRef<any, any>(({}, ref) => {
	return (
		<svg
			version='1.0'
			xmlns='http://www.w3.org/2000/svg'
			width='auto'
			height='auto'
			viewBox='0 0 215.000000 206.000000'
			preserveAspectRatio='xMidYMid meet'
			ref={ref}
		>
			<path
				className='path_logo'
				strokeDashoffset='4250.0263671875'
				strokeDasharray='4250.0263671875'
				d='M0 1660 l0 -400 665 0 665 0 -2 398 -3 397 -662 3 -663 2 0 -400z'
				transform='translate(0.000000,206.000000) scale(0.100000,-0.100000)'
				fill='#fff'
				stroke='none'
			/>
			<path
				className='path_logo'
				strokeDashoffset='2006.809326171875'
				strokeDasharray='2006.809326171875'
				d='M1417 2053 c-4 -3 -7 -64 -7 -135 l0 -128 370 0 370 0 0 135 0 135
-363 0 c-200 0 -367 -3 -370 -7z'
				transform='translate(0.000000,206.000000) scale(0.100000,-0.100000)'
				fill='#fff'
				stroke='none'
			/>
			<path
				className='path_logo'
				strokeDashoffset='3880'
				strokeDasharray='3880'
				d='M1420 1105 l0 -605 365 0 365 0 0 605 0 605 -365 0 -365 0 0 -605z'
				transform='translate(0.000000,206.000000) scale(0.100000,-0.100000)'
				fill='#fff'
				stroke='none'
			/>
			<path
				className='path_logo'
				strokeDashoffset='3500'
				strokeDasharray='3500'
				d='M0 590 l0 -590 285 0 285 0 0 590 0 590 -285 0 -285 0 0 -590z'
				transform='translate(0.000000,206.000000) scale(0.100000,-0.100000)'
				fill='#fff'
				stroke='none'
			/>
			<path
				className='path_logo'
				strokeDashoffset='2620'
				strokeDasharray='2620'
				d='M670 835 l0 -325 330 0 330 0 0 325 0 325 -330 0 -330 0 0 -325z'
				transform='translate(0.000000,206.000000) scale(0.100000,-0.100000)'
				fill='#fff'
				stroke='none'
			/>
			<path
				className='path_logo'
				strokeDashoffset='3786.555419921875'
				strokeDasharray='3786.555419921875'
				d='M677 413 c-4 -3 -7 -98 -7 -210 l0 -203 740 0 740 0 0 210 0 210
-733 0 c-404 0 -737 -3 -740 -7z'
				transform='translate(0.000000,206.000000) scale(0.100000,-0.100000)'
				fill='#fff'
				stroke='none'
			/>
		</svg>
	);
});

export const IconDowload = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 512 512'>
			<path d='M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM376.9 294.6L269.8 394.5c-3.8 3.5-8.7 5.5-13.8 5.5s-10.1-2-13.8-5.5L135.1 294.6c-4.5-4.2-7.1-10.1-7.1-16.3c0-12.3 10-22.3 22.3-22.3l57.7 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 57.7 0c12.3 0 22.3 10 22.3 22.3c0 6.2-2.6 12.1-7.1 16.3z' />
		</svg>
	);
};

export const IconsView = () => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' height='1em' viewBox='0 0 576 512'>
			<path d='M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z' />
		</svg>
	);
};

export const IconsBtnText = (text: string) => {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 150 150'>
			<path
				id='circlePath'
				transform='translate(25 25)'
				d='M50,100L50,100C22.4,100,0,77.6,0,50v0C0,22.4,22.4,0,50,0h0c27.6,0,50,22.4,50,50v0C100,77.6,77.6,100,50,100z'
				fill='none'
			/>
			<g>
				<text fill='#fff'>
					<textPath xlinkHref='#circlePath'>{text}</textPath>
				</text>
			</g>
		</svg>
	);
};

export const IconsArrowRightUp = ({ className }: { className: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			xmlnsXlink='http://www.w3.org/1999/xlink'
			width='auto'
			height='auto'
			x='0'
			y='0'
			className={className}
			viewBox='0 0 512 512'
			// style='enable-background:new 0 0 512 512'
			xmlSpace='preserve'
		>
			<g>
				<path
					d='M512 21.805v331.202c0 12.042-9.763 21.805-21.805 21.805s-21.805-9.763-21.805-21.805V74.451L37.225 505.615c-4.259 4.257-9.838 6.386-15.419 6.386s-11.16-2.129-15.419-6.386c-8.516-8.516-8.516-22.323 0-30.839L437.553 43.61h-278.56c-12.042 0-21.805-9.763-21.805-21.805S146.951 0 158.993 0h331.202C502.237-.001 512 9.763 512 21.805z'
					fill='#f7f7f7'
					data-original='#000000'
					opacity='1'
				></path>
			</g>
		</svg>
	);
};

export const IconUser = () => {
	return (
		<svg
			className='h-5 w-5 text-gray-400'
			fill='none'
			stroke-linecap='round'
			stroke-linejoin='round'
			strokeWidth='2'
			stroke='currentColor'
			viewBox='0 0 24 24'
		>
			<path d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'></path>
		</svg>
	);
};

export const IconMail = () => {
	return (
		<svg
			className='h-5 w-5 fill-gray-400'
			fill='#9ca3af'
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 512 512'
		>
			<path d='M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z' />
		</svg>
	);
};

export const IconInbox = () => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			fill='#9ca3af'
			className='h-5 w-5 fill-gray-400'
			viewBox='0 0 512 512'
		>
			<path d='M121 32C91.6 32 66 52 58.9 80.5L1.9 308.4C.6 313.5 0 318.7 0 323.9V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V323.9c0-5.2-.6-10.4-1.9-15.5l-57-227.9C446 52 420.4 32 391 32H121zm0 64H391l48 192H387.8c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7H195.8c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7H73L121 96z' />
		</svg>
	);
};

export const IconClose = () => {
	return (
		<svg
			className='h-10 w-10 text-gray-400'
			xmlns='http://www.w3.org/2000/svg'
			height='1em'
			viewBox='0 0 384 512'
			fill='#9ca3af'
		>
			<path d='M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z' />
		</svg>
	);
};

export const IntroText = forwardRef<any, any>(({ classNames }, ref) => {
	return (
		<svg
			width='90%'
			height='auto'
			viewBox='0 0 530 32'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			className={classNames}
			ref={ref}
		>
			<path
				className='hidden'
				d='M1.17044 29V30H2.17044H5.3409H6.3409V29V18.2898H16.6932H17.6932V17.2898V14.4773V13.4773H16.6932H6.3409V6.63068H17.8693H18.8693V5.63068V2.81818V1.81818H17.8693H2.17044H1.17044V2.81818V29Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M26.8693 29V30H27.8693H31.0398H32.0398V29V19.7727H36.767C36.7926 19.7727 36.8182 19.7727 36.8437 19.7726L42.0743 29.4746L42.3576 30H42.9545H46.6364H48.3244L47.5134 28.5195L42.1328 18.6979C42.1635 18.6825 42.194 18.667 42.2244 18.6513L42.2244 18.6513L42.229 18.6489C43.6954 17.8822 44.8178 16.806 45.5517 15.4176C46.2688 14.061 46.6136 12.5286 46.6136 10.8466C46.6136 9.16427 46.2687 7.6258 45.5544 6.25519C44.8218 4.84932 43.6958 3.759 42.2205 2.98257C40.7197 2.18406 38.8657 1.81818 36.7159 1.81818H27.8693H26.8693V2.81818V29ZM36.6648 14.9091H32.0398V6.63068H36.6136C37.9394 6.63068 38.9051 6.83643 39.5762 7.17532L39.5762 7.17535L39.5833 7.17886C40.2687 7.51817 40.7266 7.9747 41.0118 8.54522C41.3221 9.16582 41.4943 9.92342 41.4943 10.8466C41.4943 11.7709 41.3217 12.5098 41.0179 13.0977L41.0159 13.1015C40.7456 13.6301 40.2999 14.0646 39.6105 14.3923L39.6105 14.3923L39.607 14.3939C38.9387 14.7147 37.9785 14.9091 36.6648 14.9091Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M71.9576 7.4752L71.9601 7.47678C73.064 8.16394 73.9631 9.18899 74.6428 10.6024L74.6447 10.6064C75.3199 11.9946 75.6818 13.7489 75.6818 15.9091C75.6818 18.0693 75.3199 19.8236 74.6447 21.2118L74.6428 21.2158C73.9631 22.6292 73.064 23.6542 71.9601 24.3414L71.9576 24.343C70.8466 25.0392 69.6006 25.392 68.1932 25.392C66.7864 25.392 65.5353 25.0394 64.4147 24.3422C63.3187 23.6551 62.4185 22.6291 61.7298 21.2137C61.0623 19.8247 60.7045 18.0696 60.7045 15.9091C60.7045 13.7484 61.0623 11.9933 61.7298 10.6043C62.4185 9.18901 63.3187 8.16316 64.4146 7.47602C65.5352 6.77874 66.7863 6.42613 68.1932 6.42613C69.6006 6.42613 70.8466 6.77897 71.9576 7.4752ZM79.1502 23.5124C80.2297 21.3348 80.75 18.7898 80.75 15.9091C80.75 13.0284 80.2297 10.4834 79.1502 8.30582C78.079 6.14514 76.5915 4.44762 74.682 3.24952C72.7702 2.04994 70.597 1.46022 68.1932 1.46022C65.7894 1.46022 63.6161 2.04994 61.7043 3.24952C59.7948 4.44762 58.3073 6.14514 57.2362 8.30582C56.1566 10.4834 55.6364 13.0284 55.6364 15.9091C55.6364 18.7898 56.1566 21.3348 57.2362 23.5124C58.3073 25.673 59.7948 27.3706 61.7043 28.5686C63.6161 29.7682 65.7894 30.358 68.1932 30.358C70.597 30.358 72.7702 29.7682 74.682 28.5686C76.5915 27.3706 78.079 25.673 79.1502 23.5124Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M111.511 2.81818V1.81818H110.511H107.392H106.392V2.81818V20.6023L93.6394 2.24759L93.3411 1.81818H92.8182H89.75H88.75V2.81818V29V30H89.75H92.9205H93.9205V29V11.2695L106.622 29.5702L106.92 30H107.443H110.511H111.511V29V2.81818Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M119.511 5.63068V6.63068H120.511H127.744V29V30H128.744H131.915H132.915V29V6.63068H140.148H141.148V5.63068V2.81818V1.81818H140.148H120.511H119.511V2.81818V5.63068Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M162.602 14.5028V13.5028H161.602H150.148H149.148V14.5028V17.3153V18.3153H150.148H161.602H162.602V17.3153V14.5028Z'
				stroke='#fff'
				stroke-width='2'
			></path>
			<path
				className='hidden'
				d='M170.602 29V30H171.602H187.608H188.608V29V26.1875V25.1875H187.608H175.773V18.2898H186.585H187.585V17.2898V14.4773V13.4773H186.585H175.773V6.63068H187.403H188.403V5.63068V2.81818V1.81818H187.403H171.602H170.602V2.81818V29Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M219.369 2.81818V1.81818H218.369H215.25H214.25V2.81818V20.6023L201.497 2.24759L201.199 1.81818H200.676H197.608H196.608V2.81818V29V30H197.608H200.778H201.778V29V11.2695L214.48 29.5702L214.778 30H215.301H218.369H219.369V29V2.81818Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M227.369 29V30H228.369H236.449C239.238 30 241.675 29.4498 243.716 28.2985L243.719 28.2968C245.754 27.139 247.307 25.4804 248.365 23.3461L248.365 23.3445C249.419 21.2089 249.926 18.7023 249.926 15.8579C249.926 13.0314 249.424 10.5454 248.378 8.43416C247.331 6.31413 245.812 4.66768 243.827 3.52481C241.838 2.37137 239.484 1.81818 236.807 1.81818H228.369H227.369V2.81818V29ZM243.911 10.8095L243.911 10.8114C244.53 12.1782 244.858 13.8504 244.858 15.8579C244.858 17.8819 244.526 19.5712 243.899 20.9552C243.283 22.315 242.361 23.3444 241.12 24.0722C239.891 24.7935 238.285 25.1875 236.244 25.1875H232.54V6.63068H236.602C238.515 6.63068 240.034 7.01709 241.213 7.72728L241.213 7.72729L241.217 7.72963C242.403 8.43707 243.3 9.45187 243.911 10.8095Z'
				stroke='#fff'
				strokeWidth='2'
			/>

			<path
				className='hidden'
				d='M279.381 29V30H280.381H288.46C291.25 30 293.687 29.4498 295.727 28.2985L295.73 28.2968C297.766 27.139 299.318 25.4804 300.376 23.3461L300.377 23.3445C301.431 21.2089 301.937 18.7023 301.937 15.8579C301.937 13.0314 301.435 10.5454 300.389 8.43416C299.343 6.31413 297.824 4.66768 295.838 3.52481C293.85 2.37137 291.496 1.81818 288.818 1.81818H280.381H279.381V2.81818V29ZM295.922 10.8095L295.923 10.8114C296.541 12.1782 296.869 13.8504 296.869 15.8579C296.869 17.8819 296.537 19.5712 295.91 20.9552C295.294 22.315 294.372 23.3444 293.132 24.0722C291.902 24.7935 290.296 25.1875 288.256 25.1875H284.551V6.63068H288.614C290.527 6.63068 292.045 7.01709 293.224 7.72728L293.224 7.72729L293.228 7.72963C294.414 8.43707 295.311 9.45187 295.922 10.8095Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M309.937 29V30H310.937H326.943H327.943V29V26.1875V25.1875H326.943H315.108V18.2898H325.92H326.92V17.2898V14.4773V13.4773H325.92H315.108V6.63068H326.739H327.739V5.63068V2.81818V1.81818H326.739H310.937H309.937V2.81818V29Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M341.21 2.48558L340.975 1.81818H340.267H336.943H335.511L336.004 3.16286L345.618 29.3447L345.859 30H346.557H349.83H350.528L350.768 29.3447L360.382 3.16286L360.876 1.81818H359.443H356.119H355.412L355.176 2.48558L348.193 22.2862L341.21 2.48558Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M368.443 29V30H369.443H385.449H386.449V29V26.1875V25.1875H385.449H373.614V18.2898H384.426H385.426V17.2898V14.4773V13.4773H384.426H373.614V6.63068H385.244H386.244V5.63068V2.81818V1.81818H385.244H369.443H368.443V2.81818V29Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M394.449 29V30H395.449H410.79H411.79V29V26.1875V25.1875H410.79H399.619V2.81818V1.81818H398.619H395.449H394.449V2.81818V29Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M436.111 7.4752L436.114 7.47678C437.217 8.16394 438.117 9.18899 438.796 10.6024L438.798 10.6064C439.473 11.9946 439.835 13.7489 439.835 15.9091C439.835 18.0693 439.473 19.8236 438.798 21.2118L438.796 21.2158C438.117 22.6292 437.217 23.6542 436.114 24.3414L436.111 24.343C435 25.0392 433.754 25.392 432.347 25.392C430.94 25.392 429.689 25.0394 428.568 24.3422C427.472 23.6551 426.572 22.6291 425.883 21.2137C425.216 19.8248 424.858 18.0696 424.858 15.9091C424.858 13.7484 425.216 11.9933 425.883 10.6043C426.572 9.189 427.472 8.16316 428.568 7.47602C429.689 6.77874 430.94 6.42613 432.347 6.42613C433.754 6.42613 435 6.77897 436.111 7.4752ZM443.304 23.5124C444.383 21.3348 444.903 18.7898 444.903 15.9091C444.903 13.0284 444.383 10.4834 443.304 8.30582C442.232 6.14514 440.745 4.44762 438.835 3.24952C436.924 2.04994 434.75 1.46022 432.347 1.46022C429.943 1.46022 427.77 2.04994 425.858 3.24952C423.948 4.44762 422.461 6.14514 421.39 8.30582C420.31 10.4834 419.79 13.0284 419.79 15.9091C419.79 18.7898 420.31 21.3348 421.39 23.5124C422.461 25.673 423.948 27.3706 425.858 28.5686C427.77 29.7682 429.943 30.358 432.347 30.358C434.75 30.358 436.924 29.7682 438.835 28.5686C440.745 27.3706 442.232 25.673 443.304 23.5124Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M452.903 29V30H453.903H457.074H458.074V29V20.4375H462.801C464.952 20.4375 466.808 20.047 468.307 19.1946L468.311 19.1921C469.774 18.3509 470.881 17.2035 471.597 15.7528C472.303 14.3406 472.648 12.7842 472.648 11.1023C472.648 9.41933 472.303 7.86526 471.595 6.45944C470.868 5.01617 469.75 3.88205 468.278 3.05915C466.778 2.20748 464.914 1.81818 462.75 1.81818H453.903H452.903V2.81818V29ZM458.074 15.625V6.63068H462.648C463.972 6.63068 464.928 6.85475 465.589 7.22115L465.589 7.22118L465.596 7.22481C466.283 7.59924 466.747 8.09343 467.033 8.7106L467.033 8.71062L467.037 8.71825C467.357 9.39279 467.528 10.1806 467.528 11.1023C467.528 12.0237 467.357 12.8174 467.035 13.5026L467.033 13.5067C466.744 14.1303 466.278 14.6363 465.591 15.0275C464.942 15.398 464.002 15.625 462.699 15.625H458.074Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M480.648 29V30H481.648H497.653H498.653V29V26.1875V25.1875H497.653H485.818V18.2898H496.631H497.631V17.2898V14.4773V13.4773H496.631H485.818V6.63068H497.449H498.449V5.63068V2.81818V1.81818H497.449H481.648H480.648V2.81818V29Z'
				stroke='#fff'
				strokeWidth='2'
			/>
			<path
				className='hidden'
				d='M506.653 29V30H507.653H510.824H511.824V29V19.7727H516.551C516.577 19.7727 516.602 19.7727 516.628 19.7726L521.858 29.4746L522.142 30H522.739H526.42H528.109L527.297 28.5195L521.917 18.6979C521.948 18.6825 521.978 18.667 522.009 18.6513L522.009 18.6513L522.013 18.6489C523.48 17.8822 524.602 16.806 525.336 15.4176C526.053 14.061 526.398 12.5286 526.398 10.8466C526.398 9.16427 526.053 7.6258 525.339 6.25519C524.606 4.84932 523.48 3.759 522.005 2.98257C520.504 2.18406 518.65 1.81818 516.5 1.81818H507.653H506.653V2.81818V29ZM516.449 14.9091H511.824V6.63068H516.398C517.724 6.63068 518.689 6.83643 519.36 7.17532L519.36 7.17535L519.367 7.17886C520.053 7.51818 520.511 7.9747 520.796 8.54522C521.106 9.1658 521.278 9.9234 521.278 10.8466C521.278 11.771 521.106 12.5098 520.802 13.0977L520.8 13.1015C520.53 13.6301 520.084 14.0646 519.395 14.3923L519.395 14.3923L519.391 14.3939C518.723 14.7147 517.763 14.9091 516.449 14.9091Z'
				stroke='#fff'
				strokeWidth='2'
			/>
		</svg>
	);
});

export const IconMenu = forwardRef<any, any>(
	(
		{
			classParents,
			classChild,
			classBlockSub1,
			classBlockSub2,
			classBlockSub3,
		},
		ref
	) => {
		return (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				version='1.1'
				xmlnsXlink='http://www.w3.org/1999/xlink'
				width='48'
				height='48'
				x='0'
				y='0'
				viewBox='0 0 32 32'
				xmlSpace='preserve'
				className={classParents}
			>
				<g className={classChild}>
					<path
						fill='#fff'
						d='M27 2h-8.59c-1.66 0-3 1.35-3 3v8.59c0 1.66 1.34 3 3 3H27c1.65 0 3-1.34 3-3V5c0-1.65-1.35-3-3-3z'
						opacity='1'
					></path>
				</g>

				<g>
					<path
						d='M10.83 4.76H5c-1.65 0-3 1.35-3 3v5.83c0 1.66 1.35 3 3 3h5.83c1.66 0 3-1.34 3-3V7.76c0-1.65-1.34-3-3-3z'
						fill='#fff'
						opacity='1'
						className='classBlockSub1'
					></path>

					<path
						d='M10.83 18.17H5c-1.65 0-3 1.34-3 3V27c0 1.65 1.35 3 3 3h5.83c1.66 0 3-1.35 3-3v-5.83c0-1.66-1.34-3-3-3z'
						fill='#fff'
						opacity='1'
						className='classBlockSub2'
					></path>

					<path
						d='M24.24 18.17h-5.83c-1.66 0-3 1.34-3 3V27c0 1.65 1.34 3 3 3h5.83c1.65 0 3-1.35 3-3v-5.83c0-1.66-1.35-3-3-3z'
						fill='#fff'
						opacity='1'
						className='classBlockSub3'
					></path>
				</g>
			</svg>
		);
	}
);