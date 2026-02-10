import { __ } from '@wordpress/i18n';
import {
	InspectorControls,
	RichText,
	URLInput,
	useBlockProps,
} from '@wordpress/block-editor';
import { Notice, PanelBody, SelectControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes: {
			eyebrow,
			headline,
			subhead,
			primaryText,
			primaryUrl,
			alignment,
		},
		setAttributes,
	} = props;
	const hasHeadline = Boolean( headline && headline.trim() );
	const hasPrimaryText = Boolean( primaryText && primaryText.trim() );
	const hasPrimaryUrl = Boolean( primaryUrl && primaryUrl.trim() );
	const hasCta = hasPrimaryText && hasPrimaryUrl;
	const safeAlignment = alignment || 'left';
	const headlineWarningId = 'kb-hero-headline-required';
	const blockProps = useBlockProps( {
		className: `kb-hero kb-hero--align-${ safeAlignment }`,
	} );

	return (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Hero Settings', 'kis-blocks' ) }>
					<SelectControl
						label={ __( 'Alignment', 'kis-blocks' ) }
						value={ safeAlignment }
						options={ [
							{ label: __( 'Left', 'kis-blocks' ), value: 'left' },
							{ label: __( 'Center', 'kis-blocks' ), value: 'center' },
						] }
						onChange={ ( value ) =>
							setAttributes( { alignment: value } )
						}
					/>
					<URLInput
						label={ __( 'Primary URL', 'kis-blocks' ) }
						value={ primaryUrl }
						onChange={ ( value ) =>
							setAttributes( { primaryUrl: value } )
						}
					/>
				</PanelBody>
			</InspectorControls>
			<section { ...blockProps }>
				<div className="kb-hero__inner">
					{ ! hasHeadline && (
						<div className="kb-hero__warning">
							<Notice
								status="warning"
								isDismissible={ false }
								className="kb-hero__notice"
							>
								<span id={ headlineWarningId }>
									{ __(
										'Headline is required.',
										'kis-blocks'
									) }
								</span>
							</Notice>
						</div>
					) }
					<RichText
						tagName="p"
						className="kb-hero__eyebrow"
						value={ eyebrow }
						allowedFormats={ [] }
						multiline={ false }
						placeholder={ __( 'Eyebrow (optional)', 'kis-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { eyebrow: value } )
						}
					/>
					<RichText
						tagName="h1"
						className="kb-hero__headline"
						value={ headline }
						allowedFormats={ [] }
						multiline={ false }
						placeholder={ __( 'Headline', 'kis-blocks' ) }
						aria-describedby={
							! hasHeadline ? headlineWarningId : undefined
						}
						onChange={ ( value ) =>
							setAttributes( { headline: value } )
						}
					/>
					{ ! hasHeadline && (
						<p className="kb-hero__headline-hint">
							{ __( 'Headline is required.', 'kis-blocks' ) }
						</p>
					) }
					<RichText
						tagName="p"
						className="kb-hero__subhead"
						value={ subhead }
						allowedFormats={ [] }
						multiline={ false }
						placeholder={ __( 'Subhead (optional)', 'kis-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { subhead: value } )
						}
					/>
					<div className="kb-hero__actions">
						{ hasCta ? (
							<a
								className="kb-hero__cta"
								href={ primaryUrl }
								onClick={ ( event ) => event.preventDefault() }
							>
								<RichText
									tagName="span"
									value={ primaryText }
									allowedFormats={ [] }
									multiline={ false }
									placeholder={ __(
										'Primary action',
										'kis-blocks'
									) }
									onChange={ ( value ) =>
										setAttributes( { primaryText: value } )
									}
								/>
							</a>
						) : hasPrimaryText ? (
							<div className="kb-hero__cta-group">
								<div
									className="kb-hero__cta kb-hero__cta--disabled"
									aria-disabled="true"
								>
									<RichText
										tagName="span"
										value={ primaryText }
										allowedFormats={ [] }
										multiline={ false }
										placeholder={ __(
											'Primary action (optional)',
											'kis-blocks'
										) }
										onChange={ ( value ) =>
											setAttributes( {
												primaryText: value,
											} )
										}
									/>
								</div>
								<span className="kb-hero__cta-helper">
									{ __( 'Add a URL to enable.', 'kis-blocks' ) }
								</span>
							</div>
						) : (
							<div className="kb-hero__cta kb-hero__cta--placeholder">
								<RichText
									tagName="span"
									value={ primaryText }
									allowedFormats={ [] }
									multiline={ false }
									placeholder={ __(
										'Primary action (optional)',
										'kis-blocks'
									) }
									onChange={ ( value ) =>
										setAttributes( { primaryText: value } )
									}
								/>
							</div>
						) }
					</div>
				</div>
			</section>
		</>
	);
}
