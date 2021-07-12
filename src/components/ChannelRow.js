import React from "react";

export default class ChannelRow extends React.Component {

        render() {
                return (
                        <div className="flex items-center p-4 m-2 bg-gray-100 sm:items-start max-w-screen-md margin-auto">
                                <div className="w-1/4">
                                        <a
                                                rel="noreferrer"
                                                target="_blank"
                                                href={this.props.link}><img width="100px" className="rounded" alt={`thumbnail for channel ${this.props.name}`} src={this.props.thumbnail} /></a>
                                </div>
                                <div className="self-center flex-grow w-full p-4 text-xs sm:text-xl sm:p-2">{this.props.description}</div>
                                <div className="self-center m-2">
                                        <a
                                                rel="noreferrer"
                                                target="_blank"
                                                className="p-2 text-white bg-red-600 hover:bg-red-900"
                                                href={`${this.props.link}?sub_confirmation=1`}>
                                                Subscribe
                                        </a>
                                </div>
                        </div>
                );
        }
}