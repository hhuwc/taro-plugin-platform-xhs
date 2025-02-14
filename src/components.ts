import { singleQuote } from '@tarojs/shared'

const _true = 'true'
const _false = 'false'
const _empty = ''
// const _zero = '0'

export const components = {
  // ======== 调整属性 ========
  Icon: {
    size: '23'
  },
  Input: {
    'max-length': '',
  },
  Button: {
    'data-channel': singleQuote(''),
    'share-type': singleQuote('normal'),
    'contact-type': singleQuote('seller'),
    'contact-id': singleQuote(''),
    bindGetPhoneNumber: '',
    bindGetUserInfo: '',
    bindOpenSetting: '',
    bindContact: '',
    bindChooseAddress: '',
    bindChooseInvoiceTitle: '',
    bindLogin: ''
  },
  Form: {
    'report-submit-timeout': '0'
  },
  Slider: {
    color: singleQuote('#e9e9e9'),
    'selected-color': singleQuote('#1aad19')
  },
  WebView: {
    'progressbar-color': singleQuote('#51a0d8')
  },
  Video: {
    'play-btn-position': singleQuote('center'),
  },
  Textarea: {
    'disable-default-padding': 'false'
  },
  Map: {
    bindRegionChange: '',
    bindregionchange: '',
  },
  ScrollView: {
    'enable-flex': _false,
    'refresher-enabled': _false,
    'refresher-threshold': '45',
    'refresher-default-style': "'black'",
    'refresher-background': "'#FFF'",
    'refresher-triggered': _false,
    'show-scrollbar': _true,
    bindRefresherPulling: _empty,
    bindRefresherRefresh: _empty,
    bindRefresherRestore: _empty,
  },
  // 平台组件
  PostNoteButton: {
    type: 'default',
    size: 'default',
    title: _empty,
    content: _empty,
    'media-info': _empty,
    tags: _empty,
    binderror: _empty,
  },
  GroupChatCard: {
    type: 'card',
    'group-ids': _empty,
    bindjoingroup: _empty,
    binderror: _empty,
  },
  VideoPlayer: {},
}
