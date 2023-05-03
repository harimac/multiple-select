/**
 * Multiple Select ja
 */

$.fn.multipleSelect.locales['ja'] = {
  formatSelectAll () {
    return '[全て選択]'
  },
  formatAllSelected () {
    return '全て選択済み'
  },
  formatCountSelected (count, total) {
    return total + '項目中' + count + '項目選択'
  },
  formatNoMatchesFound () {
    return '該当無し'
  }
}

$.extend($.fn.multipleSelect.defaults, $.fn.multipleSelect.locales['ja'])
