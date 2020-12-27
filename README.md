# meta-ui
Highly experimental type driven form builder

## TODO
* load state from algebra
* fix algebra
  - unit = record(\[])
  - boolean = enumeration
  - enumeration = variant
  - support type parameters = List\[A]
* add customization
  - unit value
  - labels
  - different input validations
    - numbers
    - optionality "" / null / undefined
  - select
  - checkbox
  - textarea
  - radio
* improve UX
  - don't show errors until blurred
* improve UI
  - nesting record fields ?
* make extensible
