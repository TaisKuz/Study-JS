import './../stylus/columnBox.styl';

import { Column } from './column.js';

let ColumnBox = React.createClass({
    getDefaultProps: function () {
        return {
            columns: []
        };
    },

    render: function() {
        let columnNodes = this.props.columns.map(( column, index ) => {
            return (
                <Column key={ index } iconType={ column.iconType } title={ column.title } description={ column.description } />
            );
        });

        return (
            <div className="columnBox">
                { columnNodes }
            </div>
        );
    }
});

export { ColumnBox };