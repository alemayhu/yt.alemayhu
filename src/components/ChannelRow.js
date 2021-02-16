import React from "react"

export default class ChannelRow extends React.Component {

        render() {
                return (
                <div class="flex items-center p-4 m-2 bg-gray-100 rounded sm:items-start">
                        <div class="w-1/4">
                                <a href={this.props.link}><img width="100px" class="rounded" alt={`thumbnail for channel ${this.props.name}`} src={this.props.thumbnail} /></a>
                        </div>
                        <div class="self-center flex-grow w-full p-4 text-xs sm:text-xl sm:p-2">{this.props.description}</div>
                        <div class="self-center m-2">
                                <a
                                        class="p-2 text-white bg-red-600 rounded hover:bg-red-900"
                                        href={`${this.props.link}?sub_confirmation=1`}>
                                        Subscribe
                                </a>
                        </div>
                </div>
                );
        }
}