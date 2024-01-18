/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { PanelBody, TextControl, ColorPalette } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({attributes, setAttributes}) {
	const { description, color } = attributes;
	const colors = [
		{ name: 'red', color: '#f00' },
		{ name: 'white', color: '#fff' },
		{ name: 'blue', color: '#00f' },
	];
	return (
		<>
		<InspectorControls>
				<PanelBody title="First section">
					<p>Hello From InspectorControls</p>
					<TextControl
						onChange={(description) =>setAttributes({description})}
						value={description}
					/>
					<ColorPalette
						colors={colors}
						value={color}
						onChange={(color) => setAttributes({color})}
					/>
			</PanelBody>
		</InspectorControls>
			<p {...useBlockProps()} style={{ background: color }}>

				<p>
					{description}</p>
				{/* {__(
					'Bdthemes Blocks – hello from the editor!',
					'bdthemes-blocks'
				)} */}
			</p>
		</>

	);
}
