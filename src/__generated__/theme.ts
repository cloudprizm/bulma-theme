export type Methods = 'color' | 'evaluate' | 'findColorInvert'
export type InjectedMethods = Record<
  Methods,
  (val: string | string[], src?: string) => string
>

export type BulmaVars =
  | 'white'
  | 'bodyBackgroundColor'
  | 'bodySize'
  | 'bodyRendering'
  | 'familySansSerif'
  | 'familyPrimary'
  | 'bodyFamily'
  | 'greyDark'
  | 'text'
  | 'bodyColor'
  | 'familyMonospace'
  | 'familyCode'
  | 'codeFamily'
  | 'codePadding'
  | 'codeWeight'
  | 'codeSize'
  | 'whiteTer'
  | 'background'
  | 'hrBackgroundColor'
  | 'hrHeight'
  | 'hrMargin'
  | 'greyDarker'
  | 'textStrong'
  | 'strongColor'
  | 'blue'
  | 'link'
  | 'breadcrumbItemColor'
  | 'linkHover'
  | 'breadcrumbItemHoverColor'
  | 'breadcrumbItemActiveColor'
  | 'breadcrumbItemPaddingHorizontal'
  | 'greyLight'
  | 'breadcrumbItemSeparatorColor'
  | 'cardColor'
  | 'cardBackgroundColor'
  | 'black'
  | 'cardShadow'
  | 'cardHeaderBackgroundColor'
  | 'cardHeaderColor'
  | 'cardHeaderShadow'
  | 'cardContentBackgroundColor'
  | 'cardFooterBackgroundColor'
  | 'greyLighter'
  | 'border'
  | 'cardFooterBorderTop'
  | 'dropdownContentBackgroundColor'
  | 'dropdownContentArrow'
  | 'dropdownContentOffset'
  | 'radius'
  | 'dropdownContentRadius'
  | 'dropdownContentShadow'
  | 'dropdownItemColor'
  | 'dropdownItemHoverColor'
  | 'dropdownItemHoverBackgroundColor'
  | 'blueInvert'
  | 'linkInvert'
  | 'dropdownItemActiveColor'
  | 'dropdownItemActiveBackgroundColor'
  | 'dropdownDividerBackgroundColor'
  | 'listBackgroundColor'
  | 'listShadow'
  | 'listRadius'
  | 'listItemBorder'
  | 'listItemColor'
  | 'listItemActiveBackgroundColor'
  | 'listItemActiveColor'
  | 'listItemHoverBackgroundColor'
  | 'menuItemColor'
  | 'radiusSmall'
  | 'menuItemRadius'
  | 'menuItemHoverColor'
  | 'menuItemHoverBackgroundColor'
  | 'menuItemActiveColor'
  | 'menuItemActiveBackgroundColor'
  | 'menuListBorderLeft'
  | 'grey'
  | 'textLight'
  | 'menuLabelColor'
  | 'messageBackgroundColor'
  | 'messageRadius'
  | 'messageHeaderBackgroundColor'
  | 'textInvert'
  | 'messageHeaderColor'
  | 'messageHeaderPadding'
  | 'messageHeaderRadius'
  | 'messageBodyBorderColor'
  | 'messageBodyBorderWidth'
  | 'messageBodyColor'
  | 'messageBodyPadding'
  | 'messageBodyRadius'
  | 'messageBodyPreBackgroundColor'
  | 'messageBodyPreCodeBackgroundColor'
  | 'modalBackgroundBackgroundColor'
  | 'modalContentWidth'
  | 'modalContentMarginMobile'
  | 'modalContentSpacingMobile'
  | 'modalContentSpacingTablet'
  | 'modalCloseDimensions'
  | 'modalCloseRight'
  | 'modalCloseTop'
  | 'modalCardSpacing'
  | 'modalCardHeadBackgroundColor'
  | 'modalCardHeadBorderBottom'
  | 'modalCardHeadPadding'
  | 'radiusLarge'
  | 'modalCardHeadRadius'
  | 'modalCardTitleColor'
  | 'size_4'
  | 'modalCardTitleSize'
  | 'modalCardFootRadius'
  | 'modalCardFootBorderTop'
  | 'modalCardBodyBackgroundColor'
  | 'modalCardBodyPadding'
  | 'navbarBackgroundColor'
  | 'navbarBoxShadowSize'
  | 'navbarBoxShadowColor'
  | 'navbarHeight'
  | 'navbarPaddingVertical'
  | 'navbarPaddingHorizontal'
  | 'navbarItemColor'
  | 'navbarItemHoverColor'
  | 'whiteBis'
  | 'navbarItemHoverBackgroundColor'
  | 'navbarItemActiveColor'
  | 'navbarItemActiveBackgroundColor'
  | 'navbarItemImgMaxHeight'
  | 'navbarBurgerColor'
  | 'navbarTabHoverBackgroundColor'
  | 'navbarTabHoverBorderBottomColor'
  | 'navbarTabActiveColor'
  | 'navbarTabActiveBackgroundColor'
  | 'navbarTabActiveBorderBottomColor'
  | 'navbarTabActiveBorderBottomStyle'
  | 'navbarTabActiveBorderBottomWidth'
  | 'navbarDropdownBackgroundColor'
  | 'navbarDropdownBorderTop'
  | 'navbarDropdownOffset'
  | 'navbarDropdownArrow'
  | 'navbarDropdownRadius'
  | 'navbarDropdownBoxedRadius'
  | 'navbarDropdownBoxedShadow'
  | 'navbarDropdownItemHoverColor'
  | 'navbarDropdownItemHoverBackgroundColor'
  | 'navbarDropdownItemActiveColor'
  | 'navbarDropdownItemActiveBackgroundColor'
  | 'navbarDividerBackgroundColor'
  | 'navbarDividerHeight'
  | 'navbarBottomBoxShadowSize'
  | 'gap'
  | 'desktop'
  | 'navbarBreakpoint'
  | 'paginationColor'
  | 'paginationBorderColor'
  | 'paginationMargin'
  | 'controlHeight'
  | 'paginationMinWidth'
  | 'paginationHoverColor'
  | 'linkHoverBorder'
  | 'paginationHoverBorderColor'
  | 'linkFocus'
  | 'paginationFocusColor'
  | 'linkFocusBorder'
  | 'paginationFocusBorderColor'
  | 'linkActive'
  | 'paginationActiveColor'
  | 'linkActiveBorder'
  | 'paginationActiveBorderColor'
  | 'paginationDisabledColor'
  | 'paginationDisabledBackgroundColor'
  | 'paginationDisabledBorderColor'
  | 'paginationCurrentColor'
  | 'paginationCurrentBackgroundColor'
  | 'paginationCurrentBorderColor'
  | 'paginationEllipsisColor'
  | 'paginationShadowInset'
  | 'panelItemBorder'
  | 'panelHeadingBackgroundColor'
  | 'panelHeadingColor'
  | 'panelHeadingPadding'
  | 'panelHeadingRadius'
  | 'panelHeadingSize'
  | 'panelTabBorderBottom'
  | 'panelTabActiveBorderBottomColor'
  | 'panelTabActiveColor'
  | 'panelListItemColor'
  | 'panelListItemHoverColor'
  | 'panelBlockColor'
  | 'panelBlockHoverBackgroundColor'
  | 'panelBlockActiveBorderLeftColor'
  | 'panelBlockActiveColor'
  | 'panelBlockActiveIconColor'
  | 'panelIconColor'
  | 'tabsBorderBottomColor'
  | 'tabsBorderBottomStyle'
  | 'tabsBorderBottomWidth'
  | 'tabsLinkColor'
  | 'tabsLinkHoverBorderBottomColor'
  | 'tabsLinkHoverColor'
  | 'tabsLinkActiveBorderBottomColor'
  | 'tabsLinkActiveColor'
  | 'tabsLinkPadding'
  | 'tabsBoxedLinkRadius'
  | 'tabsBoxedLinkHoverBackgroundColor'
  | 'tabsBoxedLinkHoverBorderBottomColor'
  | 'tabsBoxedLinkActiveBackgroundColor'
  | 'tabsBoxedLinkActiveBorderColor'
  | 'tabsBoxedLinkActiveBorderBottomColor'
  | 'tabsToggleLinkBorderColor'
  | 'tabsToggleLinkBorderStyle'
  | 'tabsToggleLinkBorderWidth'
  | 'tabsToggleLinkHoverBackgroundColor'
  | 'borderHover'
  | 'tabsToggleLinkHoverBorderColor'
  | 'tabsToggleLinkRadius'
  | 'tabsToggleLinkActiveBackgroundColor'
  | 'tabsToggleLinkActiveBorderColor'
  | 'tabsToggleLinkActiveColor'
  | 'boxColor'
  | 'boxBackgroundColor'
  | 'boxRadius'
  | 'boxShadow'
  | 'boxPadding'
  | 'boxLinkHoverShadow'
  | 'boxLinkActiveShadow'
  | 'buttonColor'
  | 'buttonBackgroundColor'
  | 'buttonBorderColor'
  | 'controlBorderWidth'
  | 'buttonBorderWidth'
  | 'buttonPaddingVertical'
  | 'buttonPaddingHorizontal'
  | 'buttonHoverColor'
  | 'buttonHoverBorderColor'
  | 'buttonFocusColor'
  | 'buttonFocusBorderColor'
  | 'buttonFocusBoxShadowSize'
  | 'buttonFocusBoxShadowColor'
  | 'buttonActiveColor'
  | 'buttonActiveBorderColor'
  | 'buttonTextColor'
  | 'buttonTextHoverBackgroundColor'
  | 'buttonTextHoverColor'
  | 'buttonDisabledBackgroundColor'
  | 'buttonDisabledBorderColor'
  | 'buttonDisabledShadow'
  | 'buttonStaticColor'
  | 'buttonStaticBackgroundColor'
  | 'buttonStaticBorderColor'
  | 'contentHeadingColor'
  | 'contentBlockquoteBackgroundColor'
  | 'contentBlockquoteBorderLeft'
  | 'contentBlockquotePadding'
  | 'contentPrePadding'
  | 'contentTableCellBorder'
  | 'contentTableCellBorderWidth'
  | 'contentTableCellPadding'
  | 'contentTableCellHeadingColor'
  | 'contentTableHeadCellBorderWidth'
  | 'contentTableHeadCellColor'
  | 'contentTableFootCellBorderWidth'
  | 'contentTableFootCellColor'
  | 'inputColor'
  | 'inputBackgroundColor'
  | 'inputBorderColor'
  | 'inputHeight'
  | 'inputShadow'
  | 'inputHoverColor'
  | 'inputHoverBorderColor'
  | 'inputFocusColor'
  | 'inputFocusBorderColor'
  | 'inputFocusBoxShadowSize'
  | 'inputFocusBoxShadowColor'
  | 'inputDisabledColor'
  | 'inputDisabledBackgroundColor'
  | 'inputDisabledBorderColor'
  | 'inputArrow'
  | 'inputIconColor'
  | 'inputIconActiveColor'
  | 'inputRadius'
  | 'fileBorderColor'
  | 'fileRadius'
  | 'fileCtaBackgroundColor'
  | 'fileCtaColor'
  | 'fileCtaHoverColor'
  | 'fileCtaActiveColor'
  | 'fileNameBorderColor'
  | 'fileNameBorderStyle'
  | 'fileNameBorderWidth'
  | 'fileNameMaxWidth'
  | 'labelColor'
  | 'size_7'
  | 'sizeSmall'
  | 'helpSize'
  | 'iconDimensions'
  | 'iconDimensionsSmall'
  | 'iconDimensionsMedium'
  | 'iconDimensionsLarge'
  | 'notificationBackgroundColor'
  | 'notificationRadius'
  | 'notificationPadding'
  | 'progressBarBackgroundColor'
  | 'progressValueBackgroundColor'
  | 'tableColor'
  | 'tableBackgroundColor'
  | 'tableCellBorder'
  | 'tableCellBorderWidth'
  | 'tableCellPadding'
  | 'tableCellHeadingColor'
  | 'tableHeadCellBorderWidth'
  | 'tableHeadCellColor'
  | 'tableFootCellBorderWidth'
  | 'tableFootCellColor'
  | 'tableRowHoverBackgroundColor'
  | 'turquoise'
  | 'primary'
  | 'tableRowActiveBackgroundColor'
  | 'turquoiseInvert'
  | 'primaryInvert'
  | 'tableRowActiveColor'
  | 'tableStripedRowEvenBackgroundColor'
  | 'tableStripedRowEvenHoverBackgroundColor'
  | 'tagBackgroundColor'
  | 'tagColor'
  | 'tagRadius'
  | 'tagDeleteMargin'
  | 'titleColor'
  | 'size_3'
  | 'titleSize'
  | 'titleStrongColor'
  | 'titleStrongWeight'
  | 'titleSubSize'
  | 'titleSupSize'
  | 'subtitleColor'
  | 'size_5'
  | 'subtitleSize'
  | 'subtitleStrongColor'
  | 'subtitleNegativeMargin'
  | 'columnGap'
  | 'footerBackgroundColor'
  | 'sectionPadding'
  | 'sectionPaddingMedium'
  | 'sectionPaddingLarge'
  | 'controlRadius'
  | 'controlRadiusSmall'
  | 'controlPaddingVertical'
  | 'controlPaddingHorizontal'
  | 'cyan'
  | 'info'
  | 'green'
  | 'success'
  | 'yellow'
  | 'warning'
  | 'red'
  | 'danger'
  | 'light'
  | 'dark'
  | 'orange'
  | 'orangeInvert'
  | 'yellowInvert'
  | 'greenInvert'
  | 'cyanInvert'
  | 'purple'
  | 'purpleInvert'
  | 'redInvert'
  | 'infoInvert'
  | 'successInvert'
  | 'warningInvert'
  | 'dangerInvert'
  | 'lightInvert'
  | 'darkInvert'
  | 'code'
  | 'codeBackground'
  | 'pre'
  | 'preBackground'
  | 'linkVisited'
  | 'size_6'
  | 'sizeNormal'
  | 'sizeMedium'
  | 'sizeLarge'
  | 'customColors'
  | 'customShades'
  | 'blackBis'
  | 'blackTer'
  | 'size_1'
  | 'size_2'
  | 'renderMode'
  | 'tablet'
  | 'widescreen'
  | 'fullhd'
  | 'easing'
  | 'radiusRounded'
  | 'speed'
export type BulmaTheme = Record<BulmaVars, string> & {
  weightNormal: number
} & { bodyWeight: number } & { bodyLineHeight: number } & {
  weightBold: number
} & { strongWeight: number } & { breadcrumbItemPaddingVertical: number } & {
  cardHeaderWeight: number
} & { dropdownContentZ: number } & { messageHeaderWeight: number } & {
  messageHeaderBodyBorderWidth: number
} & { modalZ: number } & { modalCardTitleLineHeight: number } & {
  navbarZ: number
} & { navbarFixedZ: number } & { navbarDropdownZ: number } & {
  panelHeadingLineHeight: number
} & { weightLight: number } & { panelHeadingWeight: number } & {
  buttonDisabledOpacity: number
} & { weightSemibold: number } & { contentHeadingWeight: number } & {
  contentHeadingLineHeight: number
} & { labelWeight: number } & { dimensions: number[] } & {
  titleWeight: number
} & { titleLineHeight: number } & { subtitleWeight: number } & {
  subtitleLineHeight: number
} & { subtitleStrongWeight: number } & { controlLineHeight: number } & {
  colors: Record<
    | 'white'
    | 'black'
    | 'light'
    | 'lightInvert'
    | 'dark'
    | 'darkInvert'
    | 'primary'
    | 'primaryInvert'
    | 'link'
    | 'linkInvert'
    | 'info'
    | 'infoInvert'
    | 'success'
    | 'successInvert'
    | 'warning'
    | 'warningInvert'
    | 'danger'
    | 'dangerInvert',
    string
  >
} & {
  shades: Record<
    | 'blackBis'
    | 'blackTer'
    | 'greyDarker'
    | 'greyDark'
    | 'grey'
    | 'greyLight'
    | 'greyLighter'
    | 'whiteTer'
    | 'whiteBis',
    string
  >
} & { sizes: string[] } & { weightMedium: number } & {
  widescreenEnabled: boolean
} & { fullhdEnabled: boolean } & { variableColumns: boolean }

export const makeBasicTheme = ({
  color,
  evaluate,
  findColorInvert
}: InjectedMethods) => (overriding: Partial<BulmaTheme>): BulmaTheme => {
  const white = overriding.white || color(`hsl(0, 0%, 100%)`)
  const bodyBackgroundColor = overriding.bodyBackgroundColor || white
  const bodySize = overriding.bodySize || '16px'
  const bodyRendering = overriding.bodyRendering || 'optimizeLegibility'
  const familySansSerif =
    overriding.familySansSerif ||
    evaluate(
      [
        `BlinkMacSystemFont`,
        `,`,
        `-apple-system`,
        `,`,
        `"Segoe UI"`,
        `,`,
        `"Roboto"`,
        `,`,
        `"Oxygen"`,
        `,`,
        `"Ubuntu"`,
        `,`,
        `"Cantarell"`,
        `,`,
        `"Fira Sans"`,
        `,`,
        `"Droid Sans"`,
        `,`,
        `"Helvetica Neue"`,
        `,`,
        `"Helvetica"`,
        `,`,
        `"Arial"`,
        `,`,
        `sans-serif`
      ],
      'familySansSerif'
    )
  const familyPrimary = overriding.familyPrimary || familySansSerif
  const bodyFamily = overriding.bodyFamily || familyPrimary
  const greyDark = overriding.greyDark || color(`hsl(0, 0%, 29%)`)
  const text = overriding.text || greyDark
  const bodyColor = overriding.bodyColor || text
  const weightNormal = overriding.weightNormal || 400
  const bodyWeight = overriding.bodyWeight || weightNormal
  const bodyLineHeight = overriding.bodyLineHeight || 1.5
  const familyMonospace = overriding.familyMonospace || 'monospace'
  const familyCode = overriding.familyCode || familyMonospace
  const codeFamily = overriding.codeFamily || familyCode
  const codePadding =
    overriding.codePadding ||
    evaluate([`0.25em`, `0.5em`, `0.25em`], 'codePadding')
  const codeWeight = overriding.codeWeight || 'normal'
  const codeSize = overriding.codeSize || '0.875em'
  const whiteTer = overriding.whiteTer || color(`hsl(0, 0%, 96%)`)
  const background = overriding.background || whiteTer
  const hrBackgroundColor = overriding.hrBackgroundColor || background
  const hrHeight = overriding.hrHeight || '2px'
  const hrMargin = overriding.hrMargin || evaluate([`1.5rem`, `0`], 'hrMargin')
  const greyDarker = overriding.greyDarker || color(`hsl(0, 0%, 21%)`)
  const textStrong = overriding.textStrong || greyDarker
  const strongColor = overriding.strongColor || textStrong
  const weightBold = overriding.weightBold || 700
  const strongWeight = overriding.strongWeight || weightBold
  const blue = overriding.blue || color(`hsl(217, 71%,  53%)`)
  const link = overriding.link || blue
  const breadcrumbItemColor = overriding.breadcrumbItemColor || link
  const linkHover = overriding.linkHover || greyDarker
  const breadcrumbItemHoverColor =
    overriding.breadcrumbItemHoverColor || linkHover
  const breadcrumbItemActiveColor =
    overriding.breadcrumbItemActiveColor || textStrong
  const breadcrumbItemPaddingVertical =
    overriding.breadcrumbItemPaddingVertical || 0
  const breadcrumbItemPaddingHorizontal =
    overriding.breadcrumbItemPaddingHorizontal || '0.75em'
  const greyLight = overriding.greyLight || color(`hsl(0, 0%, 71%)`)
  const breadcrumbItemSeparatorColor =
    overriding.breadcrumbItemSeparatorColor || greyLight
  const cardColor = overriding.cardColor || text
  const cardBackgroundColor = overriding.cardBackgroundColor || white
  const black = overriding.black || color(`hsl(0, 0%, 4%)`)
  const cardShadow =
    overriding.cardShadow ||
    evaluate(
      [
        `0`,
        `2px`,
        `3px`,
        `rgba(${black}, 0.1)`,
        `,`,
        `0`,
        `0`,
        `0`,
        `1px`,
        `rgba(${black}, 0.1)`
      ],
      'cardShadow'
    )
  const cardHeaderBackgroundColor =
    overriding.cardHeaderBackgroundColor || 'transparent'
  const cardHeaderColor = overriding.cardHeaderColor || textStrong
  const cardHeaderShadow =
    overriding.cardHeaderShadow ||
    evaluate([`0`, `1px`, `2px`, `rgba(${black}, 0.1)`], 'cardHeaderShadow')
  const cardHeaderWeight = overriding.cardHeaderWeight || weightBold
  const cardContentBackgroundColor =
    overriding.cardContentBackgroundColor || 'transparent'
  const cardFooterBackgroundColor =
    overriding.cardFooterBackgroundColor || 'transparent'
  const greyLighter = overriding.greyLighter || color(`hsl(0, 0%, 86%)`)
  const border = overriding.border || greyLighter
  const cardFooterBorderTop =
    overriding.cardFooterBorderTop ||
    evaluate([`1px`, `solid`, `${border}`], 'cardFooterBorderTop')
  const dropdownContentBackgroundColor =
    overriding.dropdownContentBackgroundColor || white
  const dropdownContentArrow = overriding.dropdownContentArrow || link
  const dropdownContentOffset = overriding.dropdownContentOffset || '4px'
  const radius = overriding.radius || '4px'
  const dropdownContentRadius = overriding.dropdownContentRadius || radius
  const dropdownContentShadow =
    overriding.dropdownContentShadow ||
    evaluate(
      [
        `0`,
        `2px`,
        `3px`,
        `rgba(${black}, 0.1)`,
        `,`,
        `0`,
        `0`,
        `0`,
        `1px`,
        `rgba(${black}, 0.1)`
      ],
      'dropdownContentShadow'
    )
  const dropdownContentZ = overriding.dropdownContentZ || 20
  const dropdownItemColor = overriding.dropdownItemColor || greyDark
  const dropdownItemHoverColor = overriding.dropdownItemHoverColor || black
  const dropdownItemHoverBackgroundColor =
    overriding.dropdownItemHoverBackgroundColor || background
  const blueInvert = overriding.blueInvert || findColorInvert(blue)
  const linkInvert = overriding.linkInvert || blueInvert
  const dropdownItemActiveColor =
    overriding.dropdownItemActiveColor || linkInvert
  const dropdownItemActiveBackgroundColor =
    overriding.dropdownItemActiveBackgroundColor || link
  const dropdownDividerBackgroundColor =
    overriding.dropdownDividerBackgroundColor || border
  const listBackgroundColor = overriding.listBackgroundColor || white
  const listShadow =
    overriding.listShadow ||
    evaluate(
      [
        `0`,
        `2px`,
        `3px`,
        `rgba(${black}, 0.1)`,
        `,`,
        `0`,
        `0`,
        `0`,
        `1px`,
        `rgba(${black}, 0.1)`
      ],
      'listShadow'
    )
  const listRadius = overriding.listRadius || radius
  const listItemBorder =
    overriding.listItemBorder ||
    evaluate([`1px`, `solid`, `${border}`], 'listItemBorder')
  const listItemColor = overriding.listItemColor || text
  const listItemActiveBackgroundColor =
    overriding.listItemActiveBackgroundColor || link
  const listItemActiveColor = overriding.listItemActiveColor || linkInvert
  const listItemHoverBackgroundColor =
    overriding.listItemHoverBackgroundColor || background
  const menuItemColor = overriding.menuItemColor || text
  const radiusSmall = overriding.radiusSmall || '2px'
  const menuItemRadius = overriding.menuItemRadius || radiusSmall
  const menuItemHoverColor = overriding.menuItemHoverColor || textStrong
  const menuItemHoverBackgroundColor =
    overriding.menuItemHoverBackgroundColor || background
  const menuItemActiveColor = overriding.menuItemActiveColor || linkInvert
  const menuItemActiveBackgroundColor =
    overriding.menuItemActiveBackgroundColor || link
  const menuListBorderLeft =
    overriding.menuListBorderLeft ||
    evaluate([`1px`, `solid`, `${border}`], 'menuListBorderLeft')
  const grey = overriding.grey || color(`hsl(0, 0%, 48%)`)
  const textLight = overriding.textLight || grey
  const menuLabelColor = overriding.menuLabelColor || textLight
  const messageBackgroundColor = overriding.messageBackgroundColor || background
  const messageRadius = overriding.messageRadius || radius
  const messageHeaderBackgroundColor =
    overriding.messageHeaderBackgroundColor || text
  const textInvert = overriding.textInvert || findColorInvert(text)
  const messageHeaderColor = overriding.messageHeaderColor || textInvert
  const messageHeaderWeight = overriding.messageHeaderWeight || weightBold
  const messageHeaderPadding =
    overriding.messageHeaderPadding ||
    evaluate([`0.75em`, `1em`], 'messageHeaderPadding')
  const messageHeaderRadius = overriding.messageHeaderRadius || radius
  const messageBodyBorderColor = overriding.messageBodyBorderColor || border
  const messageBodyBorderWidth =
    overriding.messageBodyBorderWidth ||
    evaluate([`0`, `0`, `0`, `4px`], 'messageBodyBorderWidth')
  const messageBodyColor = overriding.messageBodyColor || text
  const messageBodyPadding =
    overriding.messageBodyPadding ||
    evaluate([`1.25em`, `1.5em`], 'messageBodyPadding')
  const messageBodyRadius = overriding.messageBodyRadius || radius
  const messageBodyPreBackgroundColor =
    overriding.messageBodyPreBackgroundColor || white
  const messageBodyPreCodeBackgroundColor =
    overriding.messageBodyPreCodeBackgroundColor || 'transparent'
  const messageHeaderBodyBorderWidth =
    overriding.messageHeaderBodyBorderWidth || 0
  const modalZ = overriding.modalZ || 40
  const modalBackgroundBackgroundColor =
    overriding.modalBackgroundBackgroundColor || color(`rgba(${black}, 0.86)`)
  const modalContentWidth = overriding.modalContentWidth || '640px'
  const modalContentMarginMobile = overriding.modalContentMarginMobile || '20px'
  const modalContentSpacingMobile =
    overriding.modalContentSpacingMobile || '160px'
  const modalContentSpacingTablet =
    overriding.modalContentSpacingTablet || '40px'
  const modalCloseDimensions = overriding.modalCloseDimensions || '40px'
  const modalCloseRight = overriding.modalCloseRight || '20px'
  const modalCloseTop = overriding.modalCloseTop || '20px'
  const modalCardSpacing = overriding.modalCardSpacing || '40px'
  const modalCardHeadBackgroundColor =
    overriding.modalCardHeadBackgroundColor || background
  const modalCardHeadBorderBottom =
    overriding.modalCardHeadBorderBottom ||
    evaluate([`1px`, `solid`, `${border}`], 'modalCardHeadBorderBottom')
  const modalCardHeadPadding = overriding.modalCardHeadPadding || '20px'
  const radiusLarge = overriding.radiusLarge || '6px'
  const modalCardHeadRadius = overriding.modalCardHeadRadius || radiusLarge
  const modalCardTitleColor = overriding.modalCardTitleColor || textStrong
  const modalCardTitleLineHeight = overriding.modalCardTitleLineHeight || 1
  const size_4 = overriding.size_4 || '1.5rem'
  const modalCardTitleSize = overriding.modalCardTitleSize || size_4
  const modalCardFootRadius = overriding.modalCardFootRadius || radiusLarge
  const modalCardFootBorderTop =
    overriding.modalCardFootBorderTop ||
    evaluate([`1px`, `solid`, `${border}`], 'modalCardFootBorderTop')
  const modalCardBodyBackgroundColor =
    overriding.modalCardBodyBackgroundColor || white
  const modalCardBodyPadding = overriding.modalCardBodyPadding || '20px'
  const navbarBackgroundColor = overriding.navbarBackgroundColor || white
  const navbarBoxShadowSize =
    overriding.navbarBoxShadowSize ||
    evaluate([`0`, `2px`, `0`, `0`], 'navbarBoxShadowSize')
  const navbarBoxShadowColor = overriding.navbarBoxShadowColor || background
  const navbarHeight = overriding.navbarHeight || '3.25rem'
  const navbarPaddingVertical = overriding.navbarPaddingVertical || '1rem'
  const navbarPaddingHorizontal = overriding.navbarPaddingHorizontal || '2rem'
  const navbarZ = overriding.navbarZ || 30
  const navbarFixedZ = overriding.navbarFixedZ || 30
  const navbarItemColor = overriding.navbarItemColor || greyDark
  const navbarItemHoverColor = overriding.navbarItemHoverColor || link
  const whiteBis = overriding.whiteBis || color(`hsl(0, 0%, 98%)`)
  const navbarItemHoverBackgroundColor =
    overriding.navbarItemHoverBackgroundColor || whiteBis
  const navbarItemActiveColor = overriding.navbarItemActiveColor || black
  const navbarItemActiveBackgroundColor =
    overriding.navbarItemActiveBackgroundColor || 'transparent'
  const navbarItemImgMaxHeight = overriding.navbarItemImgMaxHeight || '1.75rem'
  const navbarBurgerColor = overriding.navbarBurgerColor || navbarItemColor
  const navbarTabHoverBackgroundColor =
    overriding.navbarTabHoverBackgroundColor || 'transparent'
  const navbarTabHoverBorderBottomColor =
    overriding.navbarTabHoverBorderBottomColor || link
  const navbarTabActiveColor = overriding.navbarTabActiveColor || link
  const navbarTabActiveBackgroundColor =
    overriding.navbarTabActiveBackgroundColor || 'transparent'
  const navbarTabActiveBorderBottomColor =
    overriding.navbarTabActiveBorderBottomColor || link
  const navbarTabActiveBorderBottomStyle =
    overriding.navbarTabActiveBorderBottomStyle || 'solid'
  const navbarTabActiveBorderBottomWidth =
    overriding.navbarTabActiveBorderBottomWidth || '3px'
  const navbarDropdownBackgroundColor =
    overriding.navbarDropdownBackgroundColor || white
  const navbarDropdownBorderTop =
    overriding.navbarDropdownBorderTop ||
    evaluate([`2px`, `solid`, `${border}`], 'navbarDropdownBorderTop')
  const navbarDropdownOffset =
    overriding.navbarDropdownOffset ||
    evaluate([`-4px`], 'navbarDropdownOffset')
  const navbarDropdownArrow = overriding.navbarDropdownArrow || link
  const navbarDropdownRadius = overriding.navbarDropdownRadius || radiusLarge
  const navbarDropdownZ = overriding.navbarDropdownZ || 20
  const navbarDropdownBoxedRadius =
    overriding.navbarDropdownBoxedRadius || radiusLarge
  const navbarDropdownBoxedShadow =
    overriding.navbarDropdownBoxedShadow ||
    evaluate(
      [
        `0`,
        `8px`,
        `8px`,
        `rgba(${black}, 0.1)`,
        `,`,
        `0`,
        `0`,
        `0`,
        `1px`,
        `rgba(${black}, 0.1)`
      ],
      'navbarDropdownBoxedShadow'
    )
  const navbarDropdownItemHoverColor =
    overriding.navbarDropdownItemHoverColor || black
  const navbarDropdownItemHoverBackgroundColor =
    overriding.navbarDropdownItemHoverBackgroundColor || background
  const navbarDropdownItemActiveColor =
    overriding.navbarDropdownItemActiveColor || link
  const navbarDropdownItemActiveBackgroundColor =
    overriding.navbarDropdownItemActiveBackgroundColor || background
  const navbarDividerBackgroundColor =
    overriding.navbarDividerBackgroundColor || background
  const navbarDividerHeight = overriding.navbarDividerHeight || '2px'
  const navbarBottomBoxShadowSize =
    overriding.navbarBottomBoxShadowSize ||
    evaluate([`0`, `-2px`, `0`, `0`], 'navbarBottomBoxShadowSize')
  const gap = overriding.gap || '64px'
  const desktop =
    overriding.desktop || evaluate([`960px`, `+`, `(2 * ${gap})`], 'desktop')
  const navbarBreakpoint = overriding.navbarBreakpoint || desktop
  const paginationColor = overriding.paginationColor || greyDarker
  const paginationBorderColor = overriding.paginationBorderColor || greyLighter
  const paginationMargin =
    overriding.paginationMargin || evaluate([`-0.25rem`], 'paginationMargin')
  const controlHeight = overriding.controlHeight || '2.25em'
  const paginationMinWidth = overriding.paginationMinWidth || controlHeight
  const paginationHoverColor = overriding.paginationHoverColor || linkHover
  const linkHoverBorder = overriding.linkHoverBorder || greyLight
  const paginationHoverBorderColor =
    overriding.paginationHoverBorderColor || linkHoverBorder
  const linkFocus = overriding.linkFocus || greyDarker
  const paginationFocusColor = overriding.paginationFocusColor || linkFocus
  const linkFocusBorder = overriding.linkFocusBorder || blue
  const paginationFocusBorderColor =
    overriding.paginationFocusBorderColor || linkFocusBorder
  const linkActive = overriding.linkActive || greyDarker
  const paginationActiveColor = overriding.paginationActiveColor || linkActive
  const linkActiveBorder = overriding.linkActiveBorder || greyDark
  const paginationActiveBorderColor =
    overriding.paginationActiveBorderColor || linkActiveBorder
  const paginationDisabledColor = overriding.paginationDisabledColor || grey
  const paginationDisabledBackgroundColor =
    overriding.paginationDisabledBackgroundColor || greyLighter
  const paginationDisabledBorderColor =
    overriding.paginationDisabledBorderColor || greyLighter
  const paginationCurrentColor = overriding.paginationCurrentColor || linkInvert
  const paginationCurrentBackgroundColor =
    overriding.paginationCurrentBackgroundColor || link
  const paginationCurrentBorderColor =
    overriding.paginationCurrentBorderColor || link
  const paginationEllipsisColor =
    overriding.paginationEllipsisColor || greyLight
  const paginationShadowInset =
    overriding.paginationShadowInset ||
    evaluate(
      [`inset`, `0`, `1px`, `2px`, `rgba(${black}, 0.2)`],
      'paginationShadowInset'
    )
  const panelItemBorder =
    overriding.panelItemBorder ||
    evaluate([`1px`, `solid`, `${border}`], 'panelItemBorder')
  const panelHeadingBackgroundColor =
    overriding.panelHeadingBackgroundColor || background
  const panelHeadingColor = overriding.panelHeadingColor || textStrong
  const panelHeadingLineHeight = overriding.panelHeadingLineHeight || 1.25
  const panelHeadingPadding =
    overriding.panelHeadingPadding ||
    evaluate([`0.5em`, `0.75em`], 'panelHeadingPadding')
  const panelHeadingRadius = overriding.panelHeadingRadius || radius
  const panelHeadingSize = overriding.panelHeadingSize || '1.25em'
  const weightLight = overriding.weightLight || 300
  const panelHeadingWeight = overriding.panelHeadingWeight || weightLight
  const panelTabBorderBottom =
    overriding.panelTabBorderBottom ||
    evaluate([`1px`, `solid`, `${border}`], 'panelTabBorderBottom')
  const panelTabActiveBorderBottomColor =
    overriding.panelTabActiveBorderBottomColor || linkActiveBorder
  const panelTabActiveColor = overriding.panelTabActiveColor || linkActive
  const panelListItemColor = overriding.panelListItemColor || text
  const panelListItemHoverColor = overriding.panelListItemHoverColor || link
  const panelBlockColor = overriding.panelBlockColor || textStrong
  const panelBlockHoverBackgroundColor =
    overriding.panelBlockHoverBackgroundColor || background
  const panelBlockActiveBorderLeftColor =
    overriding.panelBlockActiveBorderLeftColor || link
  const panelBlockActiveColor = overriding.panelBlockActiveColor || linkActive
  const panelBlockActiveIconColor = overriding.panelBlockActiveIconColor || link
  const panelIconColor = overriding.panelIconColor || textLight
  const tabsBorderBottomColor = overriding.tabsBorderBottomColor || border
  const tabsBorderBottomStyle = overriding.tabsBorderBottomStyle || 'solid'
  const tabsBorderBottomWidth = overriding.tabsBorderBottomWidth || '1px'
  const tabsLinkColor = overriding.tabsLinkColor || text
  const tabsLinkHoverBorderBottomColor =
    overriding.tabsLinkHoverBorderBottomColor || textStrong
  const tabsLinkHoverColor = overriding.tabsLinkHoverColor || textStrong
  const tabsLinkActiveBorderBottomColor =
    overriding.tabsLinkActiveBorderBottomColor || link
  const tabsLinkActiveColor = overriding.tabsLinkActiveColor || link
  const tabsLinkPadding =
    overriding.tabsLinkPadding || evaluate([`0.5em`, `1em`], 'tabsLinkPadding')
  const tabsBoxedLinkRadius = overriding.tabsBoxedLinkRadius || radius
  const tabsBoxedLinkHoverBackgroundColor =
    overriding.tabsBoxedLinkHoverBackgroundColor || background
  const tabsBoxedLinkHoverBorderBottomColor =
    overriding.tabsBoxedLinkHoverBorderBottomColor || border
  const tabsBoxedLinkActiveBackgroundColor =
    overriding.tabsBoxedLinkActiveBackgroundColor || white
  const tabsBoxedLinkActiveBorderColor =
    overriding.tabsBoxedLinkActiveBorderColor || border
  const tabsBoxedLinkActiveBorderBottomColor =
    overriding.tabsBoxedLinkActiveBorderBottomColor || 'transparent'
  const tabsToggleLinkBorderColor =
    overriding.tabsToggleLinkBorderColor || border
  const tabsToggleLinkBorderStyle =
    overriding.tabsToggleLinkBorderStyle || 'solid'
  const tabsToggleLinkBorderWidth =
    overriding.tabsToggleLinkBorderWidth || '1px'
  const tabsToggleLinkHoverBackgroundColor =
    overriding.tabsToggleLinkHoverBackgroundColor || background
  const borderHover = overriding.borderHover || greyLight
  const tabsToggleLinkHoverBorderColor =
    overriding.tabsToggleLinkHoverBorderColor || borderHover
  const tabsToggleLinkRadius = overriding.tabsToggleLinkRadius || radius
  const tabsToggleLinkActiveBackgroundColor =
    overriding.tabsToggleLinkActiveBackgroundColor || link
  const tabsToggleLinkActiveBorderColor =
    overriding.tabsToggleLinkActiveBorderColor || link
  const tabsToggleLinkActiveColor =
    overriding.tabsToggleLinkActiveColor || linkInvert
  const boxColor = overriding.boxColor || text
  const boxBackgroundColor = overriding.boxBackgroundColor || white
  const boxRadius = overriding.boxRadius || radiusLarge
  const boxShadow =
    overriding.boxShadow ||
    evaluate(
      [
        `0`,
        `2px`,
        `3px`,
        `rgba(${black}, 0.1)`,
        `,`,
        `0`,
        `0`,
        `0`,
        `1px`,
        `rgba(${black}, 0.1)`
      ],
      'boxShadow'
    )
  const boxPadding = overriding.boxPadding || '1.25rem'
  const boxLinkHoverShadow =
    overriding.boxLinkHoverShadow ||
    evaluate(
      [
        `0`,
        `2px`,
        `3px`,
        `rgba(${black}, 0.1)`,
        `,`,
        `0`,
        `0`,
        `0`,
        `1px`,
        `${link}`
      ],
      'boxLinkHoverShadow'
    )
  const boxLinkActiveShadow =
    overriding.boxLinkActiveShadow ||
    evaluate(
      [
        `inset`,
        `0`,
        `1px`,
        `2px`,
        `rgba(${black}, 0.2)`,
        `,`,
        `0`,
        `0`,
        `0`,
        `1px`,
        `${link}`
      ],
      'boxLinkActiveShadow'
    )
  const buttonColor = overriding.buttonColor || greyDarker
  const buttonBackgroundColor = overriding.buttonBackgroundColor || white
  const buttonBorderColor = overriding.buttonBorderColor || greyLighter
  const controlBorderWidth = overriding.controlBorderWidth || '1px'
  const buttonBorderWidth = overriding.buttonBorderWidth || controlBorderWidth
  const buttonPaddingVertical =
    overriding.buttonPaddingVertical || `calc(0.375em - ${buttonBorderWidth})`
  const buttonPaddingHorizontal = overriding.buttonPaddingHorizontal || '0.75em'
  const buttonHoverColor = overriding.buttonHoverColor || linkHover
  const buttonHoverBorderColor =
    overriding.buttonHoverBorderColor || linkHoverBorder
  const buttonFocusColor = overriding.buttonFocusColor || linkFocus
  const buttonFocusBorderColor =
    overriding.buttonFocusBorderColor || linkFocusBorder
  const buttonFocusBoxShadowSize =
    overriding.buttonFocusBoxShadowSize ||
    evaluate([`0`, `0`, `0`, `0.125em`], 'buttonFocusBoxShadowSize')
  const buttonFocusBoxShadowColor =
    overriding.buttonFocusBoxShadowColor || color(`rgba(${link}, 0.25)`)
  const buttonActiveColor = overriding.buttonActiveColor || linkActive
  const buttonActiveBorderColor =
    overriding.buttonActiveBorderColor || linkActiveBorder
  const buttonTextColor = overriding.buttonTextColor || text
  const buttonTextHoverBackgroundColor =
    overriding.buttonTextHoverBackgroundColor || background
  const buttonTextHoverColor = overriding.buttonTextHoverColor || textStrong
  const buttonDisabledBackgroundColor =
    overriding.buttonDisabledBackgroundColor || white
  const buttonDisabledBorderColor =
    overriding.buttonDisabledBorderColor || greyLighter
  const buttonDisabledShadow = overriding.buttonDisabledShadow || 'none'
  const buttonDisabledOpacity = overriding.buttonDisabledOpacity || 0.5
  const buttonStaticColor = overriding.buttonStaticColor || grey
  const buttonStaticBackgroundColor =
    overriding.buttonStaticBackgroundColor || whiteTer
  const buttonStaticBorderColor =
    overriding.buttonStaticBorderColor || greyLighter
  const contentHeadingColor = overriding.contentHeadingColor || textStrong
  const weightSemibold = overriding.weightSemibold || 600
  const contentHeadingWeight = overriding.contentHeadingWeight || weightSemibold
  const contentHeadingLineHeight = overriding.contentHeadingLineHeight || 1.125
  const contentBlockquoteBackgroundColor =
    overriding.contentBlockquoteBackgroundColor || background
  const contentBlockquoteBorderLeft =
    overriding.contentBlockquoteBorderLeft ||
    evaluate([`5px`, `solid`, `${border}`], 'contentBlockquoteBorderLeft')
  const contentBlockquotePadding =
    overriding.contentBlockquotePadding ||
    evaluate([`1.25em`, `1.5em`], 'contentBlockquotePadding')
  const contentPrePadding =
    overriding.contentPrePadding ||
    evaluate([`1.25em`, `1.5em`], 'contentPrePadding')
  const contentTableCellBorder =
    overriding.contentTableCellBorder ||
    evaluate([`1px`, `solid`, `${border}`], 'contentTableCellBorder')
  const contentTableCellBorderWidth =
    overriding.contentTableCellBorderWidth ||
    evaluate([`0`, `0`, `1px`], 'contentTableCellBorderWidth')
  const contentTableCellPadding =
    overriding.contentTableCellPadding ||
    evaluate([`0.5em`, `0.75em`], 'contentTableCellPadding')
  const contentTableCellHeadingColor =
    overriding.contentTableCellHeadingColor || textStrong
  const contentTableHeadCellBorderWidth =
    overriding.contentTableHeadCellBorderWidth ||
    evaluate([`0`, `0`, `2px`], 'contentTableHeadCellBorderWidth')
  const contentTableHeadCellColor =
    overriding.contentTableHeadCellColor || textStrong
  const contentTableFootCellBorderWidth =
    overriding.contentTableFootCellBorderWidth ||
    evaluate([`2px`, `0`, `0`], 'contentTableFootCellBorderWidth')
  const contentTableFootCellColor =
    overriding.contentTableFootCellColor || textStrong
  const inputColor = overriding.inputColor || greyDarker
  const inputBackgroundColor = overriding.inputBackgroundColor || white
  const inputBorderColor = overriding.inputBorderColor || greyLighter
  const inputHeight = overriding.inputHeight || controlHeight
  const inputShadow =
    overriding.inputShadow ||
    evaluate([`inset`, `0`, `1px`, `2px`, `rgba(${black}, 0.1)`], 'inputShadow')
  const inputHoverColor = overriding.inputHoverColor || greyDarker
  const inputHoverBorderColor = overriding.inputHoverBorderColor || greyLight
  const inputFocusColor = overriding.inputFocusColor || greyDarker
  const inputFocusBorderColor = overriding.inputFocusBorderColor || link
  const inputFocusBoxShadowSize =
    overriding.inputFocusBoxShadowSize ||
    evaluate([`0`, `0`, `0`, `0.125em`], 'inputFocusBoxShadowSize')
  const inputFocusBoxShadowColor =
    overriding.inputFocusBoxShadowColor || color(`rgba(${link}, 0.25)`)
  const inputDisabledColor = overriding.inputDisabledColor || textLight
  const inputDisabledBackgroundColor =
    overriding.inputDisabledBackgroundColor || background
  const inputDisabledBorderColor =
    overriding.inputDisabledBorderColor || background
  const inputArrow = overriding.inputArrow || link
  const inputIconColor = overriding.inputIconColor || greyLighter
  const inputIconActiveColor = overriding.inputIconActiveColor || grey
  const inputRadius = overriding.inputRadius || radius
  const fileBorderColor = overriding.fileBorderColor || border
  const fileRadius = overriding.fileRadius || radius
  const fileCtaBackgroundColor = overriding.fileCtaBackgroundColor || whiteTer
  const fileCtaColor = overriding.fileCtaColor || greyDark
  const fileCtaHoverColor = overriding.fileCtaHoverColor || greyDarker
  const fileCtaActiveColor = overriding.fileCtaActiveColor || greyDarker
  const fileNameBorderColor = overriding.fileNameBorderColor || border
  const fileNameBorderStyle = overriding.fileNameBorderStyle || 'solid'
  const fileNameBorderWidth =
    overriding.fileNameBorderWidth ||
    evaluate([`1px`, `1px`, `1px`, `0`], 'fileNameBorderWidth')
  const fileNameMaxWidth = overriding.fileNameMaxWidth || '16em'
  const labelColor = overriding.labelColor || greyDarker
  const labelWeight = overriding.labelWeight || weightBold
  const size_7 = overriding.size_7 || '0.75rem'
  const sizeSmall = overriding.sizeSmall || size_7
  const helpSize = overriding.helpSize || sizeSmall
  const iconDimensions = overriding.iconDimensions || '1.5rem'
  const iconDimensionsSmall = overriding.iconDimensionsSmall || '1rem'
  const iconDimensionsMedium = overriding.iconDimensionsMedium || '2rem'
  const iconDimensionsLarge = overriding.iconDimensionsLarge || '3rem'
  const dimensions = [16, 24, 32, 48, 64, 96, 128]
  const notificationBackgroundColor =
    overriding.notificationBackgroundColor || background
  const notificationRadius = overriding.notificationRadius || radius
  const notificationPadding =
    overriding.notificationPadding ||
    evaluate([`1.25rem`, `2.5rem`, `1.25rem`, `1.5rem`], 'notificationPadding')
  const progressBarBackgroundColor =
    overriding.progressBarBackgroundColor || border
  const progressValueBackgroundColor =
    overriding.progressValueBackgroundColor || text
  const tableColor = overriding.tableColor || greyDarker
  const tableBackgroundColor = overriding.tableBackgroundColor || white
  const tableCellBorder =
    overriding.tableCellBorder ||
    evaluate([`1px`, `solid`, `${greyLighter}`], 'tableCellBorder')
  const tableCellBorderWidth =
    overriding.tableCellBorderWidth ||
    evaluate([`0`, `0`, `1px`], 'tableCellBorderWidth')
  const tableCellPadding =
    overriding.tableCellPadding ||
    evaluate([`0.5em`, `0.75em`], 'tableCellPadding')
  const tableCellHeadingColor = overriding.tableCellHeadingColor || textStrong
  const tableHeadCellBorderWidth =
    overriding.tableHeadCellBorderWidth ||
    evaluate([`0`, `0`, `2px`], 'tableHeadCellBorderWidth')
  const tableHeadCellColor = overriding.tableHeadCellColor || textStrong
  const tableFootCellBorderWidth =
    overriding.tableFootCellBorderWidth ||
    evaluate([`2px`, `0`, `0`], 'tableFootCellBorderWidth')
  const tableFootCellColor = overriding.tableFootCellColor || textStrong
  const tableRowHoverBackgroundColor =
    overriding.tableRowHoverBackgroundColor || whiteBis
  const turquoise = overriding.turquoise || color(`hsl(171, 100%, 41%)`)
  const primary = overriding.primary || turquoise
  const tableRowActiveBackgroundColor =
    overriding.tableRowActiveBackgroundColor || primary
  const turquoiseInvert =
    overriding.turquoiseInvert || findColorInvert(turquoise)
  const primaryInvert = overriding.primaryInvert || turquoiseInvert
  const tableRowActiveColor = overriding.tableRowActiveColor || primaryInvert
  const tableStripedRowEvenBackgroundColor =
    overriding.tableStripedRowEvenBackgroundColor || whiteBis
  const tableStripedRowEvenHoverBackgroundColor =
    overriding.tableStripedRowEvenHoverBackgroundColor || whiteTer
  const tagBackgroundColor = overriding.tagBackgroundColor || background
  const tagColor = overriding.tagColor || text
  const tagRadius = overriding.tagRadius || radius
  const tagDeleteMargin = overriding.tagDeleteMargin || '1px'
  const titleColor = overriding.titleColor || greyDarker
  const size_3 = overriding.size_3 || '2rem'
  const titleSize = overriding.titleSize || size_3
  const titleWeight = overriding.titleWeight || weightSemibold
  const titleLineHeight = overriding.titleLineHeight || 1.125
  const titleStrongColor = overriding.titleStrongColor || 'inherit'
  const titleStrongWeight = overriding.titleStrongWeight || 'inherit'
  const titleSubSize = overriding.titleSubSize || '0.75em'
  const titleSupSize = overriding.titleSupSize || '0.75em'
  const subtitleColor = overriding.subtitleColor || greyDark
  const size_5 = overriding.size_5 || '1.25rem'
  const subtitleSize = overriding.subtitleSize || size_5
  const subtitleWeight = overriding.subtitleWeight || weightNormal
  const subtitleLineHeight = overriding.subtitleLineHeight || 1.25
  const subtitleStrongColor = overriding.subtitleStrongColor || greyDarker
  const subtitleStrongWeight = overriding.subtitleStrongWeight || weightSemibold
  const subtitleNegativeMargin =
    overriding.subtitleNegativeMargin ||
    evaluate([`-1.25rem`], 'subtitleNegativeMargin')
  const columnGap = overriding.columnGap || '0.75rem'
  const footerBackgroundColor = overriding.footerBackgroundColor || whiteBis
  const sectionPadding =
    overriding.sectionPadding || evaluate([`3rem`, `1.5rem`], 'sectionPadding')
  const sectionPaddingMedium =
    overriding.sectionPaddingMedium ||
    evaluate([`9rem`, `1.5rem`], 'sectionPaddingMedium')
  const sectionPaddingLarge =
    overriding.sectionPaddingLarge ||
    evaluate([`18rem`, `1.5rem`], 'sectionPaddingLarge')
  const controlRadius = overriding.controlRadius || radius
  const controlRadiusSmall = overriding.controlRadiusSmall || radiusSmall
  const controlLineHeight = overriding.controlLineHeight || 1.5
  const controlPaddingVertical =
    overriding.controlPaddingVertical || `calc(0.375em - ${controlBorderWidth})`
  const controlPaddingHorizontal =
    overriding.controlPaddingHorizontal ||
    `calc(0.625em - ${controlBorderWidth})`
  const cyan = overriding.cyan || color(`hsl(204, 86%,  53%)`)
  const info = overriding.info || cyan
  const green = overriding.green || color(`hsl(141, 71%,  48%)`)
  const success = overriding.success || green
  const yellow = overriding.yellow || color(`hsl(48,  100%, 67%)`)
  const warning = overriding.warning || yellow
  const red = overriding.red || color(`hsl(348, 100%, 61%)`)
  const danger = overriding.danger || red
  const light = overriding.light || whiteTer
  const dark = overriding.dark || greyDarker
  const orange = overriding.orange || color(`hsl(14,  100%, 53%)`)
  const orangeInvert = overriding.orangeInvert || findColorInvert(orange)
  const yellowInvert = overriding.yellowInvert || findColorInvert(yellow)
  const greenInvert = overriding.greenInvert || findColorInvert(green)
  const cyanInvert = overriding.cyanInvert || findColorInvert(cyan)
  const purple = overriding.purple || color(`hsl(271, 100%, 71%)`)
  const purpleInvert = overriding.purpleInvert || findColorInvert(purple)
  const redInvert = overriding.redInvert || findColorInvert(red)
  const infoInvert = overriding.infoInvert || cyanInvert
  const successInvert = overriding.successInvert || greenInvert
  const warningInvert = overriding.warningInvert || yellowInvert
  const dangerInvert = overriding.dangerInvert || redInvert
  const lightInvert = overriding.lightInvert || dark
  const darkInvert = overriding.darkInvert || light
  const code = overriding.code || red
  const codeBackground = overriding.codeBackground || background
  const pre = overriding.pre || text
  const preBackground = overriding.preBackground || background
  const linkVisited = overriding.linkVisited || purple
  const size_6 = overriding.size_6 || '1rem'
  const sizeNormal = overriding.sizeNormal || size_6
  const sizeMedium = overriding.sizeMedium || size_5
  const sizeLarge = overriding.sizeLarge || size_4
  const customColors = overriding.customColors || 'null'
  const customShades = overriding.customShades || 'null'
  const colors = {
    white,
    black,
    light,
    lightInvert,
    dark,
    darkInvert,
    primary,
    primaryInvert,
    link,
    linkInvert,
    info,
    infoInvert,
    success,
    successInvert,
    warning,
    warningInvert,
    danger,
    dangerInvert
  }
  const blackBis = overriding.blackBis || color(`hsl(0, 0%, 7%)`)
  const blackTer = overriding.blackTer || color(`hsl(0, 0%, 14%)`)
  const shades = {
    blackBis,
    blackTer,
    greyDarker,
    greyDark,
    grey,
    greyLight,
    greyLighter,
    whiteTer,
    whiteBis
  }
  const size_1 = overriding.size_1 || '3rem'
  const size_2 = overriding.size_2 || '2.5rem'
  const sizes = [size_1, size_2, size_3, size_4, size_5, size_6, size_7]
  const renderMode = overriding.renderMode || 'optimizeLegibility'
  const weightMedium = overriding.weightMedium || 500
  const tablet = overriding.tablet || '769px'
  const widescreen =
    overriding.widescreen ||
    evaluate([`1152px`, `+`, `(2 * ${gap})`], 'widescreen')
  const widescreenEnabled = overriding.widescreenEnabled || true
  const fullhd =
    overriding.fullhd || evaluate([`1344px`, `+`, `(2 * ${gap})`], 'fullhd')
  const fullhdEnabled = overriding.fullhdEnabled || true
  const easing = overriding.easing || 'ease-out'
  const radiusRounded = overriding.radiusRounded || '290486px'
  const speed = overriding.speed || '86ms'
  const variableColumns = overriding.variableColumns || true
  return {
    white,
    bodyBackgroundColor,
    bodySize,
    bodyRendering,
    familySansSerif,
    familyPrimary,
    bodyFamily,
    greyDark,
    text,
    bodyColor,
    weightNormal,
    bodyWeight,
    bodyLineHeight,
    familyMonospace,
    familyCode,
    codeFamily,
    codePadding,
    codeWeight,
    codeSize,
    whiteTer,
    background,
    hrBackgroundColor,
    hrHeight,
    hrMargin,
    greyDarker,
    textStrong,
    strongColor,
    weightBold,
    strongWeight,
    blue,
    link,
    breadcrumbItemColor,
    linkHover,
    breadcrumbItemHoverColor,
    breadcrumbItemActiveColor,
    breadcrumbItemPaddingVertical,
    breadcrumbItemPaddingHorizontal,
    greyLight,
    breadcrumbItemSeparatorColor,
    cardColor,
    cardBackgroundColor,
    black,
    cardShadow,
    cardHeaderBackgroundColor,
    cardHeaderColor,
    cardHeaderShadow,
    cardHeaderWeight,
    cardContentBackgroundColor,
    cardFooterBackgroundColor,
    greyLighter,
    border,
    cardFooterBorderTop,
    dropdownContentBackgroundColor,
    dropdownContentArrow,
    dropdownContentOffset,
    radius,
    dropdownContentRadius,
    dropdownContentShadow,
    dropdownContentZ,
    dropdownItemColor,
    dropdownItemHoverColor,
    dropdownItemHoverBackgroundColor,
    blueInvert,
    linkInvert,
    dropdownItemActiveColor,
    dropdownItemActiveBackgroundColor,
    dropdownDividerBackgroundColor,
    listBackgroundColor,
    listShadow,
    listRadius,
    listItemBorder,
    listItemColor,
    listItemActiveBackgroundColor,
    listItemActiveColor,
    listItemHoverBackgroundColor,
    menuItemColor,
    radiusSmall,
    menuItemRadius,
    menuItemHoverColor,
    menuItemHoverBackgroundColor,
    menuItemActiveColor,
    menuItemActiveBackgroundColor,
    menuListBorderLeft,
    grey,
    textLight,
    menuLabelColor,
    messageBackgroundColor,
    messageRadius,
    messageHeaderBackgroundColor,
    textInvert,
    messageHeaderColor,
    messageHeaderWeight,
    messageHeaderPadding,
    messageHeaderRadius,
    messageBodyBorderColor,
    messageBodyBorderWidth,
    messageBodyColor,
    messageBodyPadding,
    messageBodyRadius,
    messageBodyPreBackgroundColor,
    messageBodyPreCodeBackgroundColor,
    messageHeaderBodyBorderWidth,
    modalZ,
    modalBackgroundBackgroundColor,
    modalContentWidth,
    modalContentMarginMobile,
    modalContentSpacingMobile,
    modalContentSpacingTablet,
    modalCloseDimensions,
    modalCloseRight,
    modalCloseTop,
    modalCardSpacing,
    modalCardHeadBackgroundColor,
    modalCardHeadBorderBottom,
    modalCardHeadPadding,
    radiusLarge,
    modalCardHeadRadius,
    modalCardTitleColor,
    modalCardTitleLineHeight,
    size_4,
    modalCardTitleSize,
    modalCardFootRadius,
    modalCardFootBorderTop,
    modalCardBodyBackgroundColor,
    modalCardBodyPadding,
    navbarBackgroundColor,
    navbarBoxShadowSize,
    navbarBoxShadowColor,
    navbarHeight,
    navbarPaddingVertical,
    navbarPaddingHorizontal,
    navbarZ,
    navbarFixedZ,
    navbarItemColor,
    navbarItemHoverColor,
    whiteBis,
    navbarItemHoverBackgroundColor,
    navbarItemActiveColor,
    navbarItemActiveBackgroundColor,
    navbarItemImgMaxHeight,
    navbarBurgerColor,
    navbarTabHoverBackgroundColor,
    navbarTabHoverBorderBottomColor,
    navbarTabActiveColor,
    navbarTabActiveBackgroundColor,
    navbarTabActiveBorderBottomColor,
    navbarTabActiveBorderBottomStyle,
    navbarTabActiveBorderBottomWidth,
    navbarDropdownBackgroundColor,
    navbarDropdownBorderTop,
    navbarDropdownOffset,
    navbarDropdownArrow,
    navbarDropdownRadius,
    navbarDropdownZ,
    navbarDropdownBoxedRadius,
    navbarDropdownBoxedShadow,
    navbarDropdownItemHoverColor,
    navbarDropdownItemHoverBackgroundColor,
    navbarDropdownItemActiveColor,
    navbarDropdownItemActiveBackgroundColor,
    navbarDividerBackgroundColor,
    navbarDividerHeight,
    navbarBottomBoxShadowSize,
    gap,
    desktop,
    navbarBreakpoint,
    paginationColor,
    paginationBorderColor,
    paginationMargin,
    controlHeight,
    paginationMinWidth,
    paginationHoverColor,
    linkHoverBorder,
    paginationHoverBorderColor,
    linkFocus,
    paginationFocusColor,
    linkFocusBorder,
    paginationFocusBorderColor,
    linkActive,
    paginationActiveColor,
    linkActiveBorder,
    paginationActiveBorderColor,
    paginationDisabledColor,
    paginationDisabledBackgroundColor,
    paginationDisabledBorderColor,
    paginationCurrentColor,
    paginationCurrentBackgroundColor,
    paginationCurrentBorderColor,
    paginationEllipsisColor,
    paginationShadowInset,
    panelItemBorder,
    panelHeadingBackgroundColor,
    panelHeadingColor,
    panelHeadingLineHeight,
    panelHeadingPadding,
    panelHeadingRadius,
    panelHeadingSize,
    weightLight,
    panelHeadingWeight,
    panelTabBorderBottom,
    panelTabActiveBorderBottomColor,
    panelTabActiveColor,
    panelListItemColor,
    panelListItemHoverColor,
    panelBlockColor,
    panelBlockHoverBackgroundColor,
    panelBlockActiveBorderLeftColor,
    panelBlockActiveColor,
    panelBlockActiveIconColor,
    panelIconColor,
    tabsBorderBottomColor,
    tabsBorderBottomStyle,
    tabsBorderBottomWidth,
    tabsLinkColor,
    tabsLinkHoverBorderBottomColor,
    tabsLinkHoverColor,
    tabsLinkActiveBorderBottomColor,
    tabsLinkActiveColor,
    tabsLinkPadding,
    tabsBoxedLinkRadius,
    tabsBoxedLinkHoverBackgroundColor,
    tabsBoxedLinkHoverBorderBottomColor,
    tabsBoxedLinkActiveBackgroundColor,
    tabsBoxedLinkActiveBorderColor,
    tabsBoxedLinkActiveBorderBottomColor,
    tabsToggleLinkBorderColor,
    tabsToggleLinkBorderStyle,
    tabsToggleLinkBorderWidth,
    tabsToggleLinkHoverBackgroundColor,
    borderHover,
    tabsToggleLinkHoverBorderColor,
    tabsToggleLinkRadius,
    tabsToggleLinkActiveBackgroundColor,
    tabsToggleLinkActiveBorderColor,
    tabsToggleLinkActiveColor,
    boxColor,
    boxBackgroundColor,
    boxRadius,
    boxShadow,
    boxPadding,
    boxLinkHoverShadow,
    boxLinkActiveShadow,
    buttonColor,
    buttonBackgroundColor,
    buttonBorderColor,
    controlBorderWidth,
    buttonBorderWidth,
    buttonPaddingVertical,
    buttonPaddingHorizontal,
    buttonHoverColor,
    buttonHoverBorderColor,
    buttonFocusColor,
    buttonFocusBorderColor,
    buttonFocusBoxShadowSize,
    buttonFocusBoxShadowColor,
    buttonActiveColor,
    buttonActiveBorderColor,
    buttonTextColor,
    buttonTextHoverBackgroundColor,
    buttonTextHoverColor,
    buttonDisabledBackgroundColor,
    buttonDisabledBorderColor,
    buttonDisabledShadow,
    buttonDisabledOpacity,
    buttonStaticColor,
    buttonStaticBackgroundColor,
    buttonStaticBorderColor,
    contentHeadingColor,
    weightSemibold,
    contentHeadingWeight,
    contentHeadingLineHeight,
    contentBlockquoteBackgroundColor,
    contentBlockquoteBorderLeft,
    contentBlockquotePadding,
    contentPrePadding,
    contentTableCellBorder,
    contentTableCellBorderWidth,
    contentTableCellPadding,
    contentTableCellHeadingColor,
    contentTableHeadCellBorderWidth,
    contentTableHeadCellColor,
    contentTableFootCellBorderWidth,
    contentTableFootCellColor,
    inputColor,
    inputBackgroundColor,
    inputBorderColor,
    inputHeight,
    inputShadow,
    inputHoverColor,
    inputHoverBorderColor,
    inputFocusColor,
    inputFocusBorderColor,
    inputFocusBoxShadowSize,
    inputFocusBoxShadowColor,
    inputDisabledColor,
    inputDisabledBackgroundColor,
    inputDisabledBorderColor,
    inputArrow,
    inputIconColor,
    inputIconActiveColor,
    inputRadius,
    fileBorderColor,
    fileRadius,
    fileCtaBackgroundColor,
    fileCtaColor,
    fileCtaHoverColor,
    fileCtaActiveColor,
    fileNameBorderColor,
    fileNameBorderStyle,
    fileNameBorderWidth,
    fileNameMaxWidth,
    labelColor,
    labelWeight,
    size_7,
    sizeSmall,
    helpSize,
    iconDimensions,
    iconDimensionsSmall,
    iconDimensionsMedium,
    iconDimensionsLarge,
    dimensions,
    notificationBackgroundColor,
    notificationRadius,
    notificationPadding,
    progressBarBackgroundColor,
    progressValueBackgroundColor,
    tableColor,
    tableBackgroundColor,
    tableCellBorder,
    tableCellBorderWidth,
    tableCellPadding,
    tableCellHeadingColor,
    tableHeadCellBorderWidth,
    tableHeadCellColor,
    tableFootCellBorderWidth,
    tableFootCellColor,
    tableRowHoverBackgroundColor,
    turquoise,
    primary,
    tableRowActiveBackgroundColor,
    turquoiseInvert,
    primaryInvert,
    tableRowActiveColor,
    tableStripedRowEvenBackgroundColor,
    tableStripedRowEvenHoverBackgroundColor,
    tagBackgroundColor,
    tagColor,
    tagRadius,
    tagDeleteMargin,
    titleColor,
    size_3,
    titleSize,
    titleWeight,
    titleLineHeight,
    titleStrongColor,
    titleStrongWeight,
    titleSubSize,
    titleSupSize,
    subtitleColor,
    size_5,
    subtitleSize,
    subtitleWeight,
    subtitleLineHeight,
    subtitleStrongColor,
    subtitleStrongWeight,
    subtitleNegativeMargin,
    columnGap,
    footerBackgroundColor,
    sectionPadding,
    sectionPaddingMedium,
    sectionPaddingLarge,
    controlRadius,
    controlRadiusSmall,
    controlLineHeight,
    controlPaddingVertical,
    controlPaddingHorizontal,
    cyan,
    info,
    green,
    success,
    yellow,
    warning,
    red,
    danger,
    light,
    dark,
    orange,
    orangeInvert,
    yellowInvert,
    greenInvert,
    cyanInvert,
    purple,
    purpleInvert,
    redInvert,
    infoInvert,
    successInvert,
    warningInvert,
    dangerInvert,
    lightInvert,
    darkInvert,
    code,
    codeBackground,
    pre,
    preBackground,
    linkVisited,
    size_6,
    sizeNormal,
    sizeMedium,
    sizeLarge,
    customColors,
    customShades,
    colors,
    blackBis,
    blackTer,
    shades,
    size_1,
    size_2,
    sizes,
    renderMode,
    weightMedium,
    tablet,
    widescreen,
    widescreenEnabled,
    fullhd,
    fullhdEnabled,
    easing,
    radiusRounded,
    speed,
    variableColumns
  }
}
