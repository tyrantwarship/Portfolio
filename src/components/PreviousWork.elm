module PreviousWork exposing (main)

import Html exposing (div, text, ol, li, a, img, h3, p, span)
import Html.Attributes exposing (class, id, attribute, target, href, alt, src)


-- import Html.Events


main : Html.Html msg
main =
    div [ class "container" ]
        [ div
            [ id "myCarousel"
            , class "carousel slide"
            , attribute "data-ride" "carousel"
            ]
            [ carouselIndicators
            , carouselInner
            , carouselControl "left" "prev" "Previous"
            , carouselControl "right" "next" "Next"
            ]
        ]


carouselIndicators : Html.Html msg
carouselIndicators =
    ol [ class "carousel-indicators" ] <|
        List.map
            (\( className, slide ) ->
                li
                    [ attribute "data-target" "#myCarousel"
                    , attribute "data-slide-to" <| toString slide
                    , class className
                    ]
                    []
            )
            [ ( "active", 0 ), ( "", 1 ), ( "", 2 ), ( "", 3 ) ]


carouselInner : Html.Html msg
carouselInner =
    div
        [ class "carousel-inner"
        , attribute "role" "listbox"
        ]
        [ carouselItem ]


carouselItem : Html.Html msg
carouselItem =
    div [ class "item active simon-item" ]
        [ a
            [ target "_blank"
            , href "http://tyrantwarship.github.io/FCC-SimonSays-Zipline"
            ]
            [ img
                [ alt "simon-project"
                , src "https://raw.githubusercontent.com/tyrantwarship/FCC-SimonSays-Zipline/master/demo-first.png"
                ]
                []
            , div [ class "carousel-caption caption-description" ]
                [ h3 [] [ text "Simon Says" ]
                , p [] [ text """Web application based on the timeless game, "Simon Says". Built with React and Sass.""" ]
                ]
            ]
        ]


carouselControl : String -> String -> String -> Html.Html msg
carouselControl direction dataSlide displayText =
    a
        [ class <| direction ++ " carousel-control"
        , href "#myCarousel"
        , attribute "role" "button"
        , attribute "data-slide" dataSlide
        ]
        [ span
            [ class <| "glyphicon glyphicon-chevron-" ++ direction
            , attribute "aria-hidden" "true"
            ]
            []
        , span [ class "sr-only" ] [ text displayText ]
        ]


carouselControlLeft : Html.Html msg
carouselControlLeft =
    a
        [ class "left carousel-control"
        , href "#myCarousel"
        , attribute "role" "button"
        , attribute "data-slide" "prev"
        ]
        [ span
            [ class "glyphicon glyphicon-chevron-left"
            , attribute "aria-hidden" "true"
            ]
            []
        , span [ class "sr-only" ] [ text "Previous" ]
        ]


carouselControlRight : Html.Html msg
carouselControlRight =
    a
        [ class "right carousel-control"
        , href "#myCarousel"
        , attribute "role" "button"
        , attribute "data-slide" "next"
        ]
        [ span
            [ class "glyphicon glyphicon-chevron-right"
            , attribute "aria-hidden" "true"
            ]
            []
        , span [ class "sr-only" ] [ text "Next" ]
        ]
