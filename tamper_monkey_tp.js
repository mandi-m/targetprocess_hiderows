// ==UserScript==
// @name         Remove Empty Rows
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Mandi
// @match        https://tp.grammatech.com/TargetProcess2/Default/TimeSheet.aspx*
// @grant        none
// @require http://code.jquery.com/jquery-latest.js
// ==/UserScript==

(function () {
    'use strict';

    // Your code here...
    $(document).ready(function () {
        $("body").prepend(`
          <input type="button" class="SeeMore" id="btnHide" title="Hide Rows with Zero Time in the Total Column" Value=" Hide Empty Rows " />
          <input type="button" id="btnReset" title="Show All Time Sheet Rows" Value=" Reset " />
        ` );

        $("#timeTable tr").each(function () {
            $(this).show();
        });

        $('#btnHide').click(function () {
            $("#timeTable tr td").each(function () {
            let cellText = $(this).text();
            if ($.trim(cellText) == '0') {
                if ($(this).find('span:first').attr('id').startsWith('wt_')) {
                    $(this).parent().hide();
                    }
                }
            });
        });

        $('#btnReset').click(function () {
            $("#timeTable tr").each(function () {
                $(this).show();
            });
        });
    });
})();

